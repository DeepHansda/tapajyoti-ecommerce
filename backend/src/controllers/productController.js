const ProductModel = require('../DB/models/productModel')
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const ApiFeatures = require('../services/apiFeatures')
const {cloudUpload,cloudDelete} = require('../services/imageUpload')
const ErrorHandler = require('../services/errorHandler')

module.exports = {
    // create product-----------------------

    createProduct: catchAsyncErrors(async (req, res, next) => {
        let productImages = []
        if (req.files.length > 0) {
            productImages = req.files.map(file => {
                return file.path
            })
        }


        const folder = 'tapajyoti/products'
        const imgLinks = []
        for (x in productImages) {
            const result = await cloudUpload(productImages[x], folder)
        console.log(result)
            
            imgLinks.push({
                public_id: result.public_id,
                img: result.url
            })
        }

        req.body.images = imgLinks

        // res.body.createdBy= req.user.id

        const product = new ProductModel(req.body)
        await product.save((err, result) => {
            if (err) {
                // console.log(err)
                return next(new ErrorHandler('something went wrong', 401))
            }

            res.status(200).json({
                success: 0,
                message: 'product added !',
                result
            })
        })

    }),


    // get all Products-------------

    getAllProducts: catchAsyncErrors(async (req, res, next) => {
        const productPerPage = 8;
        const productsCount = await ProductModel.countDocuments()

        const apiFeature = new ApiFeatures(ProductModel.find({}), req.query).search().filter()

        apiFeature.pagination(productPerPage)


        let products = await apiFeature.query;
        let filteredProductsCount = products.length;



        next(res.status(201).json({
            success: 1,
            products,
            filteredProductsCount,
            productsCount,
            productPerPage

        }))

    }),

    // get all products for admin

    getAdminProducts: catchAsyncErrors(async (req, res, next) => {
        await ProductModel.find().exec((err, result) => {
            if (err) {
                console.log(err)
                return next(new ErrorHandler('something went wrong', 401));
            } else if (!result || result.length == 0) {
                return next(new ErrorHandler('result not found', 401));
            } else {
                return next(res.status(201).json({
                    success: 1,
                    result: result,
                }))
            }
        })
    }),

    // get product details

    getProductDetails: catchAsyncErrors(async (req, res, next) => {
        await ProductModel.findById({
            _id: req.params.id
        }).exec((err, product) => {
            if (err) {
                console.log(err)
                return next(new ErrorHandler('something went wrong', 401));
            } else if (product == null || !product) {
                console.log(product)
                return next(new ErrorHandler('product not found', 401));
            } else {
                return next(res.status(201).json({
                    success: 1,
                    product
                }))
            }
        })
    }),

    // update product

    updateProduct:catchAsyncErrors(async (req, res, next) => {
        let productImages = []
        if (req.files.length > 0) {
            productImages = req.files.map(file => {
                return file.path
            })
        }
        const folder = 'tapajyoti/products'
        const imgLinks = []



        const products = await ProductModel.findOne({_id:req.params.id}).exec((err, product) => {
            if (err) {
                console.log(err)
                return next(new ErrorHandler('something went wrong', 401));
            }if (product == null || !product) {
                return next(new ErrorHandler('product not found', 401));
            }
        })
        

        if(productImages!==undefined || productImages.length > 0) {
            for(x in products.images){
                await cloudDelete(products.images[x].public_id)
            }
            for (x in productImages) {
                const result = await cloudUpload(productImages[x], folder)
                imgLinks.push({
                    public_id: result.public_id,
                    img: result.url
                })
            }
        }

        req.body.images = imgLinks

        await ProductModel.findByIdAndUpdate({_id: req.params.id},req.body).exec((err, result) => {
            if (err) {
                console.log(err)
                return next(new ErrorHandler('something went wrong', 401));
            }

            res.status(200).json({
                success:1,
                message:'product updated',
                result
            })
        })
    }),

    // delete product
    deleteProduct: catchAsyncErrors(async (req, res, next) => {
        const id = req.params.id
        await ProductModel.findOne({
            _id: id
        }).exec(async (err, product) => {
            if (err) {
                console.log(err)
                return next(new ErrorHandler('something went wrong', 401));
            } else if (product == null || !product) {
                return next(new ErrorHandler('product not found', 401));
            } else {
                // delete cloud images
                for (x in product.images) {
                    await cloudDelete(product.images[x].public_id)
                }
                ProductModel.findByIdAndDelete({
                    _id: id
                }).exec((err, result) => {
                    if (err) {
                        return next(new ErrorHandler('deletation failed', 401));
                    }

                    res.status(200).json({
                        success: 1,
                        message: 'deletataion successful',
                        result
                    })
                })
            }
        })
    })
}