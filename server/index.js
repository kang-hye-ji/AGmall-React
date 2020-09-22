const express=require('express')
const app = express()
const PORT = process.env.PORT || 5000;
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const session=require('express-session')
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose')
const config = require('./config/key')
const cors =require('cors');

app.set('trust proxy', 1)
app.use(session({
    secret: 'agag',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { 
        secure: true,
        sameSite:'none'
    }
}))

//dev ver
/* app.use(session({
    secret: 'agag',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { 
        secure: false
    }
})) */

app.use(cors({
    origin: "https://jolly-turing-1308c8.netlify.app",
    credentials: true,
    methods:"PUT, GET, POST, DELETE, OPTIONS",

}));


mongoose.connect(config.MongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...', config.MongoURI))
.catch(err => console.log(err))


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/user', require('./routes/users'))
app.use('/api/product', require('./routes/products'))

app.get('/', (req, res)=>{
    res.send("Hello World")
})
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))