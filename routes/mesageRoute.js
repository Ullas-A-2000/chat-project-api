const model = require('../models/model')
const express= require('express')
const messageRoute = express.Router()
messageRoute.use(express.json())


messageRoute.get('/msgs',async(req,res)=>{
    // const pgno = parseInt(req.query.pgno)||1
    // const limit = parseInt(req.query.limit)||10
    // const pglimit = pgno*limit
    // const skipcontent = (pgno-1)*10
    const pgno = parseInt(req.query.pgno) || 1
    const pgsize = parseInt(req.query.pgsize) || 10

    const skipcount = (pgno - 1) * pgsize
    try {
        const currentpage = await model.find()
        .limit(pgsize)
        .skip(skipcount)

        res.status(200).json(currentpage)

    } catch (error) {
        res.status(200).json({message:"some error occured"})
    }
})

messageRoute.get('/',async(req,res)=>{
    try {
        const data = await model.find({})
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"some error occured"})
        console.log(error)
    }
})

messageRoute.post('/',async(req,res)=>{
    try {
        const data = await model.create(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message:"some error occured"})
        console.log(error)
    }
})

module.exports = messageRoute