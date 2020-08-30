const mongoose=require('mongoose');

const sessionSchema=mongoose.Schema({
    session:Object
})


const Session=mongoose.model('Session', sessionSchema)
module.exports={Session}