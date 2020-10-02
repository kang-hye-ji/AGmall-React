const express = require('express')
const router = express.Router()
const {Product} = require('../models/product')
const {recentViewProd} = require('../models/recentViewProd')
const moment=require('moment')

/* router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://jolly-turing-1308c8.netlify.app");
    //res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", true);
    res.setHeader("Set-Cookie", "key=value; HttpOnly; SameSite=None")
    next();
}); */
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
router.post('/saveRecentView', (req, res)=>{
    const recentViewProduction = new recentViewProd(req.body);
    recentViewProd.deleteMany({userId:req.body.userId, prodId:req.body.prodId}, (err, doc)=>{
        if(err) return console.log(err)
        recentViewProduction.save((err,doc)=>{
            if(err) console.log(err)
            return res.status(200).json({success:true})
        })
    })
})
router.post('/importRecentView', (req, res)=>{
    recentViewProd.deleteMany({userId:req.body.userId, viewDate:{$lte:moment().subtract(10,'days')}},(err,doc)=>{
        recentViewProd.find({userId:req.body.userId},(err,doc)=>{
            if(err) console.log(err)
            return res.status(200).json({success:true, doc})
        })
    })
})

module.exports = router;