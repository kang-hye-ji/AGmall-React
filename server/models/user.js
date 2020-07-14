const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    userId:{
        type:String,
        minlength:6
    },
    password:{
        type:String,
        minlength:8,
        maxlength:16
    },
    name:{
        type:String
    },
    email:{
        type:String,
    },
    phoneNum:{
        type:Number,
        maxlength:1
    },
    address:{
        type:String
    },
    gender:{
        type:String
    },
    birthDay:{
        type:Date
    },
    recommenderId:{
        type:String
    },
    memberType:{
        type:String
    }
})

const User=mongoose.model('User', userSchema)
module.exports={User}