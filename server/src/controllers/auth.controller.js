const User = require("../models/user.model")

require("dotenv").config()

const jwt = require("jsonwebtoken")

const createToken = (user) => {
    return jwt.sign({user:user}, process.env.JWT_ACCESS_KEY)
}


const Signup = async(req,res) => {
    try {
        let user = await User.findOne({email:req.body.email}).lean().exec()

        if(user) {
            return res.status(400).json({status:"failed", message:"User email already exists"})
        }

        user = await User.create(req.body)

        const token = createToken(user)

        return res.status(201).json({user, token})

    } 
    catch (error) {
        return res.status(500).json({status:"failed", message:error.message})
    }
}

const Login = async(req,res) => {
    try{
        let user = await User.findOne({email:req.body.email})

        if(!user) {
            return res.status(400).json({ status: "failed", message: "Please check your email and password" });
        }

        const match = await user.checkPassword(req.body.password);

        if(!match){
            return res.status(400).json({ status: "failed", message: "Please check your password" });
        }

        const token = createToken(user)

        return res.status(201).json({user, token})

    }
    catch(error){
        return res.status(500).json({status:"failed", message:error.message})
    }
}


module.exports = {Signup, Login}