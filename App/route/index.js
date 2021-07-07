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

    const {id} = req.body


    if(typeof id !== 'number'  &&  typeof id !== 'object')return res.status(404).send({msg:'erro ao deletar'})

    res.status(200).send({msg:'delete sucessful'})
})


module.exports = route