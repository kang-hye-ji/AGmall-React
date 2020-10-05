const mongoose=require('mongoose');

const recentViewProdSchema=mongoose.Schema({
    userId:String,
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    viewDate:Date
})

const recentViewProd=mongoose.model('recentViewProd', recentViewProdSchema)
module.exports={recentViewProd}