const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("./errorHandler");

const tokenHandler = async(res,statusCode,user) => {
    
        const token = await user.getToken();
        console.log(token)
        const options = {
            expires: new Date(
                Date.now() + 48 * 60 * 60 * 1000
            ),
            httpOnly: true
        }

        res.status(statusCode).cookie("token", token, options).json({
            success:1,
            message:'success',
            user
        })
    }
    



module.exports = tokenHandler