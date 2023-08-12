const mongoose = require('mongoose')
const schema = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

const Usermodel = mongoose.model("Users",schema)
module.exports = Usermodel