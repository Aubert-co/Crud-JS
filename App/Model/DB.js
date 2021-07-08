const mongo = require('mongodb')

require('dotenv').config()

mongo.connect(`${process.env.HOST_MONGO}`,{useUnifiedTopology:true,useNewUrlParser:true})

const Schema = mongo.Schema

const schema = new Schema({
    
    price_item:String,
    name_item:String
})

const Itens = mongo.model('itens',schema)

module.exports = Itens