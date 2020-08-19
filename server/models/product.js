const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
    name:String,
    category:String,
    fixedPrice:Number,
    sellingPrice:Number,
    discount:Number,
    deliveryCharge:Number,
    productOption:Object,
    emailInfoAgree:Boolean,
    filePath:String
})

const Product=mongoose.model('Product', productSchema)
module.exports={Product}