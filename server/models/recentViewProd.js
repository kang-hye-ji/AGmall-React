const mongoose=require('mongoose');

const recentViewProdSchema=mongoose.Schema({
    userId:String,
    prodId:String,
    viewDate:Date
})

const recentViewProd=mongoose.model('recentViewProd', recentViewProdSchema)
module.exports={recentViewProd}