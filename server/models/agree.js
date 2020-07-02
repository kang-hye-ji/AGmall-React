const mongoose=require('mongoose');

const agreeSchema=mongoose.Schema({
    agreeUsage:{
        type:Boolean,
        required:true
    },
    agreePersonal:{
        type:Boolean
    }
})

const Agree=mongoose.model('Agree', agreeSchema)
module.exports={Agree}