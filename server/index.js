const express=require('express')
const app = express()
const PORT = process.env.PORT || 5000;
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const mongoose = require('mongoose')
const config = require('./config/key')

const {Product}=require('./models/product')
const {User}=require('./models/user')

const path = require('path');

/* if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "client/build", "index.html"));
}); */

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
    Product.find((err, products)=>{
        if(err) return res.status(400).send(err)
        console.log(products)
    })
})
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))