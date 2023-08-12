const model = require('../models/user')
const express= require('express')
const Userroute = express.Router()
Userroute.use(express.json())

Userroute.get('/',async(req,res)=>{
    try {
        const data = await model.find({})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"some error occured"})
        console.log(error)
    }
})

Userroute.post('/',async(req,res)=>{
    try {
        const data = await model.create(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"some error occured"})
        console.log(error)
    }
})

module.exports = Userroute
