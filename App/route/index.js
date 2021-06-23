const router = require('express').Router()

router
.get('/index',(req,res)=>{
    res.status(200).send({data:'valor'})
})


.post('/itens',(req,res)=>{
    console.log(req.body)

    res.status(200).send({data:'valor'})
})
module.exports = router