const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            vehicle: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Vehicle",
                required: true
            },
            quantity: {
                type: Number,
                required:true,
                default:1

            }
        }
    ],
    totalAmount:{
        type:Number,
        required:true,
    },
    status:{
        type:String,
        enum:["placed","shipped","Delivered"],
        default:"placed"
    }

},{timestamps:true})

module.exports = mongoose.model("Order",orderSchema)

