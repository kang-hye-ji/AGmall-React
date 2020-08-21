const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    name:String,
    category:String,
    fixedPrice:Number,
    sellingPrice:Number,
    discount:Number,
    deliveryCharge:Number,
    productOption:Object,
    filePath:String,
    createDate:Date
},{timestamps:true})

const Product=mongoose.model('Product', productSchema)
module.exports={Product}