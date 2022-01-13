const express = require('express')

const port = 200

const app = express()

app.get('/', (req, res)=>{res.status(200).json({message:"99 Bottles of beer on the wall"})})
app.get('/:numberOfBottles', (req, res)=>{
    let numberOfBottles = req.params.numberOfBottles;
    res.status(200).json({message:`${numberOfBottles} Bottles of beer on the wall.`})})

app.listen(port,()=>{
    console.log("server live!")
})