const express=require('express')
const app = express()
const port = process.env.PORT || 5000;
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const mongoose = require('mongoose')
const config = require('./config/key')

const {PRODUCT}=require('./models/product')
const {USER}=require('./models/users')

mongoose.connect(config.MongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/user', require('./routes/users'))
app.use('/api/product', require('./routes/products'))

app.get('/', (req, res)=>{
    res.send("Hello World")
})
app.get('/product', (req, res)=>{
    PRODUCT.find((err, products)=>{
        if(err) return res.status(400).send(err)
        res.json(products)
    })
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))