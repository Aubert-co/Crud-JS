const chai = require('chai')
const {expect} = require('chai')
const request = require('supertest')
const app = require('../serve')


describe('APIS Itens ',()=>{
    test('should return a status 200 and a data array get/itens',async()=>{
       const resp = await request(app)
       .get('/api/itens')
        

        expect(resp.statusCode).to.equal(200)
        expect(resp.body.data).to.be.a('array')
    
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


