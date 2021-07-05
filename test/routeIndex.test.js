const chai = require('chai')
const should = chai.should()
const chaiHTTP = require('chai-http')
const app = require('../App/serve')


chai.use(chaiHTTP)
chai.should()


describe('ITENS ',()=>{
    it('should return a status 200 and a data object',(done)=>{
        chai.request(app)
        .get('/api/itens')
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(200)
            done()
        })
    })
})