const express = require('express')
const tipsRoute = express.Router()

tipsRoute.get('/', (req,res)=>{res.status(200).json({tip:"coming soon"})})
tipsRoute.get('/:total/:tipPercentage', (req,res)=>{
    let total = Number(req.params.total)
    let tipPercentage = Number(req.params.tipPercentage)

    let tipAmount = total*(tipPercentage/100);
    res.status(200).json({message:`the tip is ${tipAmount}`})})


module.exports = tipsRoute