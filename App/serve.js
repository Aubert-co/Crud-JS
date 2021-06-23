const app = require('express')()
require('dotenv').config()

const rotas = require('./route/rotas')

app.use(rotas)

app.listen(process.env.PORT,()=>{
    console.log(`running at port ${process.env.PORT}`)
})


