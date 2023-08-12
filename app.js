const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const model = require('./models/model')

const app = express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://admin:admin12345@demoapi.8x8bkre.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected")
})
.catch((error)=>{
    console.log(error)
})


const user = require('./routes/userRoute')
const msg = require('./routes/mesageRoute')


app.use('/user',user)
app.use('/msg',msg)



app.listen(3000,()=>{
    console.log("im listening")
})