const express = require('express')
const router = express.Router()
const {Product} = require('../models/product')

router.post('/lists', (req, res)=>{
    Product.find({'category':req.body.category}, (err, products)=>{
        if(err) return console.log(err)
        res.status(200).json({success:true, products})
    })
})

module.exports = router;