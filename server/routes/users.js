const express = require('express')
const router = express.Router()
const {User} = require('../models/user')
const { body, validationResult } = require('express-validator');
/* router.post('/register', [
    body('password')
        .isLength({min:5})
], (req, res)=>{
    const result = validationResult(req);
    const hasErrors = !result.isEmpty();
    if(hasErrors){
        res.json({message:'비밀번호를 5자리 이상 입력해주세요.'})
        return;
    }

    const registerInfo = new User(req.body);
    registerInfo.save((err, doc)=>{
        if(err) return res.send(err)
        return res.status(200).json({success:true})
    })
}) */

router.post('/register', (req, res)=>{
    const registerInfo = new User(req.body);
    registerInfo.save((err, doc)=>{
        if(err) return res.send(err)
        return res.status(200).json({success:true})
    })
})
module.exports = router;