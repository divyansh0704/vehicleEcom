const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    brand:String,
    price:Number,
    type:String,
    image:String
},{timestamps:true});

module.exports = mongoose.model("Vehicle",vehicleSchema);