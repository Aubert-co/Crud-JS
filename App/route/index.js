const route = require('express').Router()
const ItensDB = require('../Model/DB')

route
.get('/itens',async(req,res)=>{
    
    const data = await ItensDB.find({})
    res.status(200).send(data)
})


.post('/itens',async (req,res)=>{

    const {name_item,price_item,color_item,quantities_item,ItensID} = req.body

    if(typeof name_item !== 'string' || typeof price_item !=='number' || name_item ===''
     || color_item === '' || quantities_item === ''){
        return res.status(404).send({msg:'wrong datas'})
    }
    try{
        ItensDB.insertMany({
            name_item:'camisa',
            price_item, 
            color_item,
            quantities_item
        })
    }catch(err){
        throw err
    }
    res.status(200).send({msg:'post sucessful'})
})

.delete('/itens',(req,res)=>{

    const {id_itens} = req.body


    if(typeof id_itens !== 'number'  &&  typeof id_itens !== 'object'){
        return res.status(404).send({msg:'not found'})
    }
    res.status(200).send({msg:'delete sucessful'})
})

.put('/itens',(req,res)=>{
    const {id_itens,name_item,price_item,color_item,quantities_item} = req.body

    if(typeof name_item !== 'string' || typeof price_item !== 'number' ||  id_itens ==='' || name_item ===''){
        return res.status(404).send({msg:'not found'})
    }
    try{
    ItensDB.updateOne(
        {id_itens:id_itens},
        {
            $set:{name_item,price_item,color_item,quantities_item}
        })
    }catch(err){
        if(err)throw err
    }
    res.status(200).send({msg:'update sucessful'})
})

module.exports = route