const route = require('express').Router()




route
.get('/itens',(req,res)=>{
    const data =['name']


    res.status(200).send(data)
})

.post('/itens',(req,res)=>{

    const {name_item,price_item} = req.body

    if(!name_item || !price_item){
        return res.status(404).send({msg:'erro'})
    }
    res.status(200).send({msg:'post sucessful'})
})


.delete('/deleteItens',(req,res)=>{
    res.status(200).send({msg:'sucess'})
})

module.exports = route