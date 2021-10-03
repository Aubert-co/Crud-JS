const route = require('express').Router()

const {GetItens,PostItens,
UpdateItens,DeleteItens,FindItens} = require('../Controller/index')

route
.get('/itens',GetItens)

.post('/itens',PostItens)

.delete('/itens',DeleteItens)

.put('/itens',UpdateItens)

.post('/itens',FindItens)
module.exports = route