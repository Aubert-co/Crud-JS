const {expect} = require('chai')
const request = require('supertest')
const port = require('../serve')
var app


describe('APIS Itens ',()=>{

    beforeAll(()=>{
       app =  port.listen(8081)
    })
    test('should return a status 404 when send invalid name_item  post/itens',async()=>{
        const resp = await request(app)
        .post('/api/itens')
        .send({name_item:32,price_item:43,color_item:'blue',quantities_item:34})

        expect(resp.statusCode).to.equal(404)
        expect(resp.body.msg).to.equal('invalid datas')
    })
    test('should return a status 404 when send invalid price_item  post/itens',async()=>{
        const resp = await request(app)
        .post('/api/itens')
        .send({name_item:'camisa',price_item:'43',color_item:'blue',quantities_item:34})

        expect(resp.statusCode).to.equal(404)
        expect(resp.body.msg).to.equal('invalid datas')
    })
    
})