const route = require('express').Router()
const cors = require('cors')

const index = require('./index')
const bodyParser = require('body-parser')


route.use(cors())
route.use(bodyParser.json())

route.use('/api',index)


module.exports = route
