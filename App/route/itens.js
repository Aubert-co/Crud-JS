const route = require('express').Router()


route
.get('/itens',(req,res)=>{
    res.status(200).send({data:['valor']})
})
.post('/itens',(req,res)=>{
    res.status(200).send({data:'ok'})
})

module.exports = route