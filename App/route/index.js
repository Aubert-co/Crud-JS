const route = require('express').Router()


route
.get('/itens',(req,res)=>{
    const data =[]

    res.status(200).send(data)
})


.post('/itens',(req,res)=>{

    const {name_item,price_item} = req.body

    if(typeof name_item !== 'string' || typeof price_item !=='number' || name_item ===''){
        return res.status(404).send({msg:'wrong datas'})
    }
    res.status(200).send({msg:'post sucessful'})
})

.delete('/deleteItens',(req,res)=>{

    const {id} = req.body


    if(typeof id !== 'number'  &&  typeof id !== 'object'){
        return res.status(404).send({msg:'not found'})
    }
    res.status(200).send({msg:'delete sucessful'})
})

.put('/UpdteItens',(req,res)=>{
    const {name_item,price_item,id} = req.body

    if(typeof name_item !== 'string' || typeof price_item !== 'number' || typeof id !=='number' || name_item ===''){
        return res.status(404).send({msg:'not found'})
    }
    res.status(200).send({msg:'update sucessful'})
})

module.exports = route