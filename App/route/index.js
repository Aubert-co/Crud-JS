const route = require('express').Router()
const MongoItens = require('../Model/DB')


route
.get('/index',(req,res)=>{
    res.status(200).send({data:'valor'})
})


.post('/itens',(req,res)=>{
    const {price_item,name_item} = req.body
    
    res.status(200).send({data:'valor'})
})


module.exports = route