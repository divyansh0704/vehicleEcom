const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async(req,res)=>{
    const {name,email, password} = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"user already exist"});
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user =await  User.create({
        name,
        email,
        password:hashedPassword
    })

    res.status(201).json({message:"registered successfully",user: {
    id: user._id,
    name: user.name,
    email: user.email
  }});

}

exports.login = async(req,res)=>{
    const {email,password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        res.status(400).json({message:"user not registered"});
    }
    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        res.status(400).json({message:"email or password incorrect"});
    }

    const token = await jwt.sign(
        { userId: user._id},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
        )

    res.json({
        user,token
    });
}