const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')

const errorMiddleware = require('./src/middleware/error')
const userRouter = require('./src/routes/userRoutes')
const productRouter = require('./src/routes/productRoutes')
const orderRouter = require('./src/routes/orderRoutes')

app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.get('/',(req,res) => {
    res.status(200).json({
        message:"server is started!"
    })
})


// routes
app.use('/api',userRouter)
app.use('/api',productRouter)
app.use('/api',orderRouter)

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;