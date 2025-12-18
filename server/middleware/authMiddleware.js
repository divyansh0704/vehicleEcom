const jwt = require("jsonwebtoken");

const authMiddleware = async(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        res.status(401).json({message:"no token provided"});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();

    }catch(error){
        res.status(401).json({message:"invalid token"});

    }
}

module.exports = authMiddleware;