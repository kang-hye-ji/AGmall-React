if(process.env.NODE_ENV === 'production'){
    module.exports=require('./prod')
}else{
    module.exports=require('./dev')
}
/* mongodb+srv://KangHyeJi:209408@boilerplate.myf0s.mongodb.net/AGmall?retryWrites=true&w=majority */