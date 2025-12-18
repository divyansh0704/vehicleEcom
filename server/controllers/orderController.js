const Order = require("../models/Order");

exports.placeOrder = async (req,res)=>{
    const userId = req.userId;
    const{items,totalAmount} = req.body;

    const order = await Order.create({
        user: userId,
        items,
        totalAmount
    })

    res.status(201).json(order);
}
exports.getMyOrders = async(req,res)=>{
    const userId = req.userId;
    
    const orders = await Order.find({user:userId}).populate("items.vehicle","name brand price");

    res.json({orders});

}


