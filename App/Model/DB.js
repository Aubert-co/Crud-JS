const mongo = require('mongoose')

require('dotenv').config()

mongo.connect(`${process.env.HOST_MONGO}`,{useUnifiedTopology:true,useNewUrlParser:true})

const Schema = mongo.Schema

const schema = new Schema({
    _id: Schema.ObjectId,
    name_item:String,
    price_item:Number,
    color_item:String,
    quantities_item:Number
}) 

const Itens = mongo.model('Itens',schema)

module.exports = Itens