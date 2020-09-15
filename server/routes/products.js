const express = require('express')
const router = express.Router()
const {Product} = require('../models/product')

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://jolly-turing-1308c8.netlify.app");
    //res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.setHeader("Set-Cookie", "key=value; HttpOnly; SameSite=None")
    next();
});
router.post('/lists', (req, res)=>{
    Product.find({'category':req.body.category}, (err, products)=>{
        if(err) return console.log(err)
        res.status(200).json({success:true, products})
    })
})
router.post('/prodDetail', (req, res)=>{
    Product.find({'_id':req.body.prodId}, (err, products)=>{
        if(err) return console.log(err)
        res.status(200).json({success:true, products})
    })
})

module.exports = router;