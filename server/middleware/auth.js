const {User} =require('../models/user');

let auth=(req, res, next)=>{
    let token=/*  req.session.w_auth; */res.cookie.w_auth;
    User.findByToken(token, (err,user)=>{
        if(err) console.log(err);
        if(!user){
            return res.json({
                isAuth:false,
                error:true,
                token:token
            })
        }
        req.token=token;
        req.user=user;
        next();
    })
}

module.exports={auth};