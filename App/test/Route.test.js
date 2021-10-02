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
})