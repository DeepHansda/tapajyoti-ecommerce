const express = require('express');
const app = express();
const cors = require('cors');


const errorMiddleware = require('./src/middleware/error')
const userRouter = require('./src/routes/userRoutes')
const productRouter = require('./src/routes/productRoutes')
const upload = require('./src/middleware/multerUpload')

app.use(express.json());
app.use(cors());


app.get('/',(req,res) => {
    res.status(200).json({
        message:"server is started!"
    })
})

// app.post('/img',upload.array('img'),(req,res) => {
//     res.status(200).json({
//         data:req.files
//     })
// })


app.use('/api',userRouter)
app.use('/api',productRouter)



// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;