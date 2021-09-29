const route = require('express').Router()

const {GetItens,PostItens,
UpdateItens,DeleteItens} = require('../Controller/index')

route
.get('/itens',GetItens)


.post('/itens',PostItens)

.delete('/itens',DeleteItens)

.put('/itens',UpdateItens)

module.exports = route