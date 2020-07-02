const express = require('express')
const router = express.Router()
const {Agree} = require('../models/agree')

router.post('/save', (req, res)=>{
    const agree = new Agree(req.body);
    agree.save((err, doc)=>{
        if(err) return res.send(err)

        Agree.find({'_id':doc._id})
            .exec((err, result)=>{
                if(err) return res.send(err);
                res.status(200).json({success:true, result})
            })
    })
})

module.exports = router;