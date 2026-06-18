const express = require('express');

const app = express()

const notes=[]

app.use(express.json())

app.post('/notes',(req,res)=>{
    notes.push(req.body)

    res.status(201).json({
        message : "notes created successfully"
    })
})



app.get('/notes',(req,res)=>{
    
    res.status(201).json({
        message : "notes fetched successfully",
        notes : notes
    })
})

module.exports = app