const User = require("../models/User")

const adminMiddleware = async(req,res,next)=>{
    const user = await User.findById(req.userId);

    if(!user && !user.role!=="admin"){
        return res.status(403).json({message:"admin role required"});
    }

    next();
}

module.exports = adminMiddleware