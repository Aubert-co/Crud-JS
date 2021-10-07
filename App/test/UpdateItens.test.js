const {expect} = require('chai')
const request = require('supertest')
const port = require('../serve')
var app



describe('APIS Itens ',()=>{
    beforeAll(()=>{
        app =  port.listen(8086)
     })

    test('should return a status 404 when send wrong values',async()=>{
       const resp = await request(app)
       .update('/api/itens')
        .send({id_itens:'value'})
        expect(resp.statusCode).to.equal(404)
        expect(resp.body.msg).to.be('invalid datas')
    
    })

   
    
})
