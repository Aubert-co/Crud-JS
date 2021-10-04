const {expect} = require('chai')
const request = require('supertest')
const port = require('../serve')
var app



describe('APIS Itens ',()=>{
    beforeAll(()=>{
        app =  port.listen(8081)
     })

    test('should return a status 200 and a data array get/itens',async()=>{
       const resp = await request(app)
       .get('/api/itens')
        
        expect(resp.statusCode).to.equal(200)
        expect(resp.body.data).to.be.a('array')
    
    })

   
    
})


