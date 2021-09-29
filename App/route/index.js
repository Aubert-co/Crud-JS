const route = require('express').Router()
const ItensDB = require('../Model/DB')
const {GetItens,PostItens,
UpdateItens,DeleteItens} = require('../Controller/index')

route
.get('/itens',GetItens)


.post('/itens',PostItens)

.delete('/itens',DeleteItens)

.put('/itens',UpdateItens)

module.exports = route