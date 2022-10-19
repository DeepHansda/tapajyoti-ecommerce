const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter the product name'],
        trim: true
    },
    desc: {
        type: String,
        required: [true, 'please enter the product description']
    },
    features: {
        type: String,
        required: [true, 'please enter the product features']
    },
    price: {
        type: Number,
        required: [true, 'please enter the price'],
        maxlength: [8, "Price cannot exceed 8 characters"]
    },
    brand:{
        type: String,
        // required: [true, 'please enter the brand'],
        trim: true
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    }],
    category: {
        type: String,
        required: [true, "Please Enter Product Category"],
    },
    stock: {
        type: Number,
        required: [true, 'please enter the stock'],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1,
    },
    numOfReviews:{
        type: Number,
        default:0,
    },
    reviews:[{

        user:{
            type:mongoose.Schema.ObjectId,
            ref:'User',
            required: true,
        },
        name:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        },
        comment:{
            type:String,
            required:true,
        }
    }
    ],
    best:{
        type:Boolean,
        default:false,
    },
    // createdBy:{
    //     type:mongoose.Schema.ObjectId,
    //     ref:'User',
    //     required: true,
    // }
},{
    timestamps:{
        createdAt:true,
        modifiedAt:true,
    }
})

module.exports = mongoose.model('Product',productSchema)