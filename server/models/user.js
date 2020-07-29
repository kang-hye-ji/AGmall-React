const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const saltRounds=10;

const userSchema=mongoose.Schema({
    userId:{
        type:String,
        trim:true,
        minlength:6
    },
    password:{
        type:String,
        trim:true,
        minlength:8,
        maxlength:16,
    },
    name:{
        type:String,
    },
    email:{
        type:String,
        /* trim:true, */
        /* trim:true,
        index:true,
        sparse:true */
        /* unique:1 */
    },
    emailInfoAgree:Boolean,
    phoneNum:{
        type:Number,
    },
    phoneInfoAgree:Boolean,
    postInfo:{
        type:Object,
    },
    postDetailInfo:{
        type:String,
        default:''
    },
    gender:{
        type:String,
    },
    calender:{
        type:String,
    },
    birthDay:{
        type:String,
    },
    recommenderId:String,
    memberType:{
        type:String,
        default:''
    }
})

userSchema.pre('save', function(next){
    var user=this;
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err)
                user.password=hash;
                next();
            })
        })
    }else{
        next();
    }
})

const User=mongoose.model('User', userSchema)
module.exports={User}