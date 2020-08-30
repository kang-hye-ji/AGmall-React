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

const path = require('path');
app.use(cors());

/* if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/", (req, res) => {
res.sendFile(path.join(__dirname, "client/build", "index.html"));
}); */

mongoose.connect(config.MongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...', config.MongoURI))
.catch(err => console.log(err))


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/* app.use(session({
    store: new MongoStore({ mongooseConnection: mongoose.connection })
})); */
/* app.use(cookieParser()); */



//express- session
app.set('trust proxy', 1)
app.use(session({
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: 'agag',
    resave: false,
    saveUninitialized: true/* ,
    cookie: { secure: '' } */
}))
//store 설정할것

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
    return console.log(req.session.w_auth)
})
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))