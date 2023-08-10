const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const orderRoute = require("./routes/order")
const cartRoute = require("./routes/cart")
const razorPay = require("./routes/razorpay")
const cors = require("cors")
dotenv.config()
const stripeRoute = require("./routes/stripe")


mongoose.connect(
    process.env.Mongo_URL
).then(()=>console.log("Connection successfull")).catch((e)=>{
    console.log(e.message);
})

app.use(cors())
app.use(express.json())
app.use("/api/user",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/products",productRoute)
app.use("/api/orders",orderRoute)
app.use("/api/cart",cartRoute)
app.use("/api/checkout",stripeRoute)
app.use("/api/payment", razorPay);


app.listen(process.env.PORT||5000,()=>{
    console.log("Backend Server is running")
});
