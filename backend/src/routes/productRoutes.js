const express = require('express');
const { createProduct, getAllProducts, getAdminProducts, getProductDetails, deleteProduct, updateProduct } = require('../controllers/productController');
const upload = require('../middleware/multerUpload')
const router = new express.Router();

router.post('/createProduct',upload.array('img'),createProduct)
router.get('/getProducts',getAllProducts);
router.get('/getAllProducts',getAdminProducts)
router.get('/getProduct/:id',getProductDetails)
router.post('/deleteProduct/:id',deleteProduct)
router.post('/updateProduct/:id',updateProduct)


module.exports = router;