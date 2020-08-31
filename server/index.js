const express=require('express')
const app = express()
const router = express.Router()
const PORT = process.env.PORT || 5000;
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const session=require('express-session')
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose')
const config = require('./config/key')
const cors =require('cors');

const path = require('path');
/* app.set('trust proxy', false) */
app.use(session({
    genid: function(req) {
        return genuugid() // use UUIDs for session IDs
    },
    secret: 'agag',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: { 
        secure: false,
        sameSite:'none',
        httpOnly:false
    }
}))

app.use(cors({
    origin: "https://jolly-turing-1308c8.netlify.app",
    credentials: true,
    /* methods:"PUT, GET, POST, DELETE, OPTIONS", */

}));


mongoose.connect(config.MongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...', config.MongoURI))
.catch(err => console.log(err))


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());






///xxx
//개발환경
/* var sess = {
    secret: 'agag',
    cookie: {}
}
if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
} */
/* app.use(session({
    sess,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    genid: function(req) {
        return genuuid() // use UUIDs for session IDs
    },
    secret: 'agag'
})) */




app.use('/api/user', require('./routes/users'))
app.use('/api/product', require('./routes/products'))

app.get('/', (req, res)=>{
    res.send("Hello World")
    console.log(req.session.w_auth)
    console.log(req.session)
})
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))