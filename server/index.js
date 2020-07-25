const express=require('express')
const app = express()
const port = 5000
const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/key')

mongoose.connect(config.MongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/user', require('./routes/users'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))