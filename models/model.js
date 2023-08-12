const mongoose = require('mongoose')
const schema = mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true
    }
})

const model = mongoose.model("messages",schema)
module.exports = model