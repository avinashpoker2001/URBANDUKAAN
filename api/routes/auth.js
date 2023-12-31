const User = require("../models/User");
const router = require("express").Router();
const CryptoJs = require("crypto-js")
const jwt = require("jsonwebtoken")

//Register
router.post("/register", async (req,res)=>{
    console.log(req.body)
    const newUser= new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(req.body.password,process.env.PASS_SEC).toString(),
    address: req.body.address})
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch(err){
        console.log(err.message);
        res.status(500).json(err)
    }
})
//LOGIN

router.post("/login",async(req,res)=>{
    console.log(req.body)
    try{
        const user = await User.findOne({
        username:req.body.username
    });
    !user && res.status(401).json("Wrong Credentials!")
    const hashedPassword = CryptoJs.AES.decrypt(user.password,process.env.PASS_SEC);
    const Originalpassword= hashedPassword.toString(CryptoJs.enc.Utf8);
    Originalpassword !== req.body.password && res.status(401).json("Wrong Credentials!")
    const accessToken=jwt.sign({
        id:user._id,
        isAdmin:user.isAdmin
    },
    process.env.JWT_SEC,
    {expiresIn:"3d"}
    )
    const { password,...others }=user._doc;
    res.status(200).json({...others,accessToken})
}
    catch(err){
        res.status(500).json(err)
    }
})

module.exports=router