const express = require('express')
const router = express.Router()
const jwt=require('jsonwebtoken');
const {User} = require('../models/user')
const {auth}=require('../middleware/auth')

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    //res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    //res.header("Access-Control-Allow-Credentials", true);
    next();
});
router.post('/register', (req, res)=>{
    const registerInfo = new User(req.body);
    registerInfo.save((err, doc)=>{
        if(err) return console.log(err)
        return res.status(200).json({success:true})
    })
})

router.post('/register/idDuplCheck', (req, res)=>{
    User.findOne({userId:req.body.userId}, (err, userId)=>{
        if(err) return console.log(err)
        if(userId===null){
            return res.status(200).json({uniqueID:true})
        }
        return res.status(200).json({uniqueID:false})
    })
})
router.post('/memberLogin', (req, res)=>{
    User.findOne({userId:req.body.userId}, (err, user)=>{
        if(err) return res.send(err)
        if(!user){
            return res.json({
                loginSuccess:false,
                message:'회원가입되지 않은 아이디입니다.'
            })
        }
        user.comparePassword(req.body.password,(err, isMatch)=>{
            if(!isMatch){
                return res.json({
                    loginSuccess:false,
                    message:'비밀번호가 틀렸습니다.'
                })
            }
            user.generateToken((err, user)=>{
                if(err) return res.status(400).send(err).json({message:'토큰을 생성하는데 실패했습니다.'});
                
                User.findOne({userId:req.body.userId})
                .exec((err, user)=>{
                    if(err) return res.send(err);
                    res.cookie('w_authExp', user.tokenExp);
                    res.cookie('w_auth', user.token)
                        .status(200)
                        .json({
                            loginSuccess:true,
                            user_id:user._id
                        })
                })
            })
        })
    })
})

router.post('/idSave', (req, res)=>{
    User.findOne({userId:req.body.loggedId}, (err, user)=>{
        var token=jwt.sign(user._id.toHexString(),'secret')

        if(err) return console.log(err)
        return res.status(200).json({success:true, user_id:token})
    })
})

router.post('/provideId', (req, res)=>{
    jwt.verify(req.body.user_id, 'secret', function(err, decode){
        User.findOne({'_id':decode}, function(err, user){
            if(err) return res.status(400).send(err);
            return res.status(200).json({success:true, userId:user.userId})
        })
    })
    /* User.findOne({_id:req.body.user_id}, (err, user)=>{
        if(err) return console.log(err)
        return res.status(200).json({success:true})
    }) */
})
/* userSchema.statics.findByToken=function(token, cb){
    var user=this;
    jwt.verify(token, 'secret', function(err, decode){
        user.findOne({'_id':decode, 'token':token}, function(err, user){
            if(err) return cb(err);
            cb(null, user);
        })
    })
} */

router.get('/logout', auth, (req, res)=>{
    User.findOneAndUpdate({_id:req.user._id}, {token:'', tokenExp:''}, (err, doc)=>{
        if(err) return console.log(err)
        return res.status(200).json({success:true, message:req.user.user_id})
    })
})

router.get('/auth', auth, (req, res)=>{
    res.status(200).json({
        _id:req.user._id,
        isAuth:true
    })
})

module.exports = router;