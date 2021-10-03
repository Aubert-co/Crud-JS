const ItensDB = require('../Model/DB')
const Routes = {
    GetItens:async(req,res)=>{
        const data = await ItensDB.find({})
        res.status(200).send({data})
    },
    PostItens:async(req,res)=>{
        const {name_item,price_item,color_item,quantities_item} = req.body

    if(typeof name_item !== 'string' || typeof price_item !=='number' || name_item ===''
     || color_item === '' || quantities_item === ''){
        return res.status(404).send({msg:'invalid datas'})
    }
    try{
        ItensDB.insertMany({
            name_item,
            price_item, 
            color_item,
            quantities_item
        })
    }catch(err){
        throw err
    }
    res.status(200).send({msg:'post sucessful'})
    },
    DeleteItens:async(req,res)=>{
        const {id_itens} = req.body

        if(typeof id_itens !== 'number'  ||  typeof id_itens !== 'object'){
            return res.status(404).send({msg:'invalid datas'})
        }
        try{
            ItensDB.deleteOne({id_itens});
        }catch(err){
            if(err)throw err
        }
        res.status(200).send({msg:'delete sucessful'})
    },
   
    UpdateItens:async(req,res)=>{
        const {id_itens,name_item,price_item,color_item,quantities_item} = req.body

        if(typeof name_item !== 'string' || typeof price_item !== 'number' ||  id_itens ==='' || name_item ===''){
            return res.status(404).send({msg:'invalid datas'})
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
    },
    FindItens:async(req,res)=>{
        const {name_item} = req.body

        if(name_item === ''){
            return res.status(404).send({msg:'invalid datas'})
        }
        const data = await ItensDB.find({name_item})

        res.status(200).send({data})
    }
}

module.exports = Routes