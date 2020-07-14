const express = require('express')
const router = express.Router()
const {User} = require('../models/user')

router.post('register', (req, res)=>{
    const registerInfo = new User(req.variable);
    registerInfo.save((err, doc)=>{
        if(err) return res.send(err)
        return res.status(200).json({success:true})
    })
})

module.exports = router;