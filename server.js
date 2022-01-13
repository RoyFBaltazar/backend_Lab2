const express = require('express')
const route = require('./routes/tip')
const magicRoute = require('./routes/magic')
const port = 2000
const app = express()

app.use('/tip',route)
app.use('/magicEight', magicRoute)
app.get('/', (req,res)=>{res.status(200).json({message: "api up"})})
app.get('/greeting/:name', (req,res)=>{
    let name = req.params.name
    res.status(200).json({message:`Wow! hello there, ${name}!`})})

app.listen(port, ()=> {
    console.log("live")
})


