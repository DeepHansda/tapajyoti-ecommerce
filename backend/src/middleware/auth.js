const ErrorHandler = require('../services/errorHandler')
const tokenHandler = require('../services/tokenHandler')
const jwt= require('jsonwebtoken')
const UserModel = require('../DB/models/userModel')
const catchAsyncErrors = require('./catchAsyncErrors')
module.exports=  isAuthenticated =catchAsyncErrors( async(req,res,next)=>{
    const token = req.cookies.token
    
    if(!token){
        return next(new ErrorHandler('something went wrong while login or try again',401))
    }

    const decodedId = await jwt.verify(token,process.env.JWT_KEY)

    req.user = await UserModel.find({_id: decodedId.id})
    console.log(req.user)
    next()
}
)