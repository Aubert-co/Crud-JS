const {expect} = require('chai')
const request = require('supertest')
const port = require('../serve')
var app



describe('APIS Itens ',()=>{
    beforeAll(()=>{
        app =  port.listen(8085)
     })

    test('should return a status 200 and a data array get/itens',async()=>{
       const resp = await request(app)
       .delete('/api/itens')
        .send({id_itens:'value'})
        expect(resp.statusCode).to.equal(404)
        expect(resp.body.msg).to.be('invalid datas')
    
    })

   
    
})


