const route = require('express').Router()




route.get('/itens',(req,res)=>{
    res.status(200).send({msg:'sucessful'})
})

.post('/itens',(req,res)=>{

    const {name_item,price_item} = req.body

    if(!name_item || !price_item){
        return res.status(404).send({msg:'erro'})
    }
    res.status(200).send({msg:'post sucessful'})
})

module.exports = route