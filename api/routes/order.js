const Order = require('../models/Order')
const { verifyToken, verifyTokenAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

//Create 
router.post("/",async(req,res)=>{
    const newOrder=new Order(req.body);
    // console.log(newOrder)
    try{
        const savedOrder = await newOrder.save()
        // console.log(savedOrder)
        res.status(200).json(savedOrder)
    }
    catch(e){ 
        res.status(500).json(e)
    }
})




//Update

router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{

    try{
        const updatedOrder= await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})    
        res.status(200).json(updatedOrder)
    }catch(e){
                res.status(500).json(e)
            }
})

//DELETE
router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted....")
    }catch(e){
        res.status(500).json(e)
    }
})
//Get User Orders
router.get("/find/:userid",verifyTokenAuthorization,async(req,res)=>{
    try{
        const orders = await Order.findOne({userId:req.params.id})
        res.status(200).json(orders)
    }catch(e){
        res.status(500).json(e)
    }
})

//Get All

router.get("/",verifyTokenAndAdmin,async(req,res)=>{
    try{
    const oredrs = await Order.find()
    res.status(200).json(oredrs) 
    }
    catch(e){
        res.status(500).json(e)
    }
})

// Get Monthly Income

router.get("/income",verifyTokenAndAdmin,async(req,res)=>{
    const productId = req.query.pid;
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    const previousMonth = new Date(date.setMonth(lastMonth.getMonth()-1)) 
    try{
        const income = await Order.aggregate([
            { $match:{ createdAt:{ $gte:previousMonth },
            ...Order(productId && {
                $elementMatch:{productId}
            })
        } },
            {
                    $project:{
                    month:{$month:"$createdAt"},
                    sales:"$amount",
                    }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:"$sales"}
                }
            }
        ])
        res.status(200).json(income)
    }catch(e){
        console.log(e.message)
        res.status(500).json(e)
    }
})

module.exports=router