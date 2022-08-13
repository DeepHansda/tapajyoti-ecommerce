const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config()
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

module.exports = cloudUpload = async (path, folder) => {
    return await cloudinary.uploader.upload(path, {
        folder: folder
    }).then((result) => {
        if (result) {
            fs.unlink(path, (err) => {
                err ? console.error(err) : console.log('file cleared !')
            });

            return {
                message: "upload successful",
                public_id: result.public_id,
                url: result.url,
            };
        }
    }).catch(err => {
        fs.unlink(path, (err) => {
            err ? console.error(err) : console.log('file cleared !')
        });


        return {
            message: "upload faild",
            error: err
        };
    })
}

module.exports = cloudDelete = async(public_id)=>{
    return await cloudinary.uploader.destroy(public_id).then((result) => {
        if (result) {
            return {
                message: "deletation successful",
                result
            };
        }
    }).catch(err => {
       return {
            message: "deletation faild",
            error: err
        };
    })
}