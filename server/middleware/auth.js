const {User} =require('../models/user');

let auth=(req, res, next)=>{
    let token= req.cookies.w_auth;
    User.findByToken(token, (err,user)=>{
        if(err) console.log(err);
        if(!user){
            return res.json({
                isAuth:false,
                error:err,
                token:req.cookies.w_auth
            })
        }
        req.token=token;
        req.user=user;
        next();
    })
}

module.exports={auth};