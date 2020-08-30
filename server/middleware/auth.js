const {User} =require('../models/user');

let auth=(req, res, next)=>{
    User.findByToken(req.session.w_auth, (err,user)=>{
        if(err) console.log(err);
        if(!user){
            /* return console.log(req.session.w_auth) */
            return res.json({
                isAuth:false,
                error:true
            })
        }
        /* req.token=req.session.w_auth; */
        req.user=user;
        next();
    })
}
/* let auth=(req, res, next)=>{
    let token= req.session.w_auth;
    console.log(req.session.w_auth);
    User.findByToken(token, (err,user)=>{
        if(err) console.log(err);
        if(!user){
            return res.json({
                isAuth:false,
                error:true
            })
        }
        req.token=token;
        req.user=user;
        next();
    })
} */

module.exports={auth};