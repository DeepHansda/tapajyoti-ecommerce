const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const os = require("os");

const errorMiddleware = require("./src/middleware/error");
const userRouter = require("./src/routes/userRoutes");
const productRouter = require("./src/routes/productRoutes");
const orderRouter = require("./src/routes/orderRoutes");
const repairRouter = require("./src/routes/repairRoutes");
const utilRouter = require("./src/routes/utilsRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://localhost:3000/",
      "https://tapajyoti-ecommerce.vercel.app/",
    ],
    credentials: true,
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is started!",
  });
});

// routes
app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", orderRouter);
app.use("/api", repairRouter);
app.use("/api", utilRouter);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
