const chai = require('chai')
const {expect} = require('chai')
const should = chai.should()
const chaiHTTP = require('chai-http')
const app = require('../App/serve')


chai.use(chaiHTTP)
chai.should()


describe('ITENS ',()=>{
    it('should return a status 200 and a data array',(done)=>{
        chai.request(app)
        .get('/api/itens')
        .end((err,res)=>{
            if(err)done(err)

            
            res.should.have.status(200)
            expect(res.body).to.be.a('array')

            done()
        })
    })

    it('should return a status 200 and a sucessl menssage',(done)=>{
        chai.request(app)
        .post('/api/itens')
        .set({'Content-Type':'application/json'})
        .send({name_item:'camisa',price_item:10})
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(200)

            expect(res.body).to.deep.own.include({msg:'post sucessful'})
            done()
        })
    })
})