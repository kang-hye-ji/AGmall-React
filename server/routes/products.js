const express = require('express')
const router = express.Router()
const jwt=require('jsonwebtoken');
const {User} = require('../models/user')
const {auth}=require('../middleware/auth')

router.post('/register', (req, res)=>{
    const registerInfo = new User(req.body);
    registerInfo.save((err, doc)=>{
        if(err) return console.log(err)
        return res.status(200).json({success:true})
    })
})

module.exports = router;