const express = require('express')
const router = express.Router()
const {User} = require('../models/user')

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


/* router.get('/auth', auth, (req, res)=>{
    res.status(200).json({
        _id:req.user._id
    })
}) */

module.exports = router;