const {User} =require('../models/user');

let auth=(req, res, next)=>{
    User.findByToken(req.session.w_auth, (err,user)=>{
        if(err) console.log(err);
        if(!user){
            return res.json({
                isAuth:false,
                error:true
            })
        }
        req.user=user;
        next();
    })
}

module.exports={auth};