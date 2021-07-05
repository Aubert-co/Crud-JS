const route = require('express').Router()

route.get('/itens',(req,res)=>{
    res.status(200).send({data:'ola'})
})

module.exports = route