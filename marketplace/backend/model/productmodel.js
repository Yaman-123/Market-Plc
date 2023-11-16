const mongoose = require('mongoose')
let productSchema=mongoose.Schema({
    product_name:{
        type:String,
        required:true,
        allowNull:true
    },
    product_price:{
        type:Number,
        required:true,
        allowNull:true
    },
     created_at:{
        type:Date,
        default:Date()
     }
})
let ProductModel=mongoose.model("ProductModel",productSchema)
module.exports = ProductModel;