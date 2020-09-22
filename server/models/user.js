const mongoose=require('mongoose');
const bcrypt=require('bcrypt')
const saltRounds=10;
const jwt=require('jsonwebtoken');
const moment=require('moment');

const userSchema=mongoose.Schema({
    userId:{
        type:String,
        /* trim:true, */
        minlength:6
    },
    password:{
        type:String,
        /* trim:true, */
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
        type:String,
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
    },
    class:{
        type:String,
    },
    tokenExp:{
        type:String,
    },
    token:{
        type:String,
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

userSchema.methods.comparePassword=function(plainPassword, cb){
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err);
        cb(null, isMatch)
    })
}

userSchema.methods.generateToken=function(cb){
    var user=this;
    var token=jwt.sign(user._id.toHexString(),'secret')
    var Hour=moment().add(1, 'hour').valueOf();

    user.update({token:token, tokenExp:Hour},function(err, user){
        if(err) return cb(err)
        cb(null, user);
    })
}

userSchema.statics.findByToken=function(token, cb){
    var user=this;
    jwt.verify(token, 'secret', function(err, decode){
        user.findOne({_id:decode, token:token}, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })
}

const User=mongoose.model('User', userSchema)
module.exports={User}