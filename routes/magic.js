const express = require('express')
const magicRoute = express.Router()
const data = require('../data/magicData')

magicRoute.get('/', (req,res) =>{res.status(200).json({message:"magic"})})

magicRoute.get('/Will%20I%20Be%20A%20Millionaire', (req,res) =>{
let idx = data[Math.floor(Math.random()*data.length)]
// let response = data[idx]

    res.status(200).json({message:`${idx}`})})






module.exports = magicRoute