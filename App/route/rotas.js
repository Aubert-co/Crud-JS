const route = require('express').Router()
const cors = require('cors')
const bodyparser = require('body-parser')
const itens = require('./itens')


route.use(cors())
route.use(bodyparser.json())
route.use(itens)

module.exports = route