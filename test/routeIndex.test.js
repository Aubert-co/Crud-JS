const chai = require('chai')
const chaiHTTP = require('chai-http')
const should = chai.should()
const app = require('../App/serve')
chai.use(chaiHTTP)


describe('index',()=>{

    describe('/Get index',()=>{
        it('Testando a rota index',(done)=>{
            chai.request(app)
            .get('/itens')
            .end((err,res)=>{
                if(err)throw err
                res.should.have.status(200)
                res.body.should.be.a('object')
                done()
            })
        })
    })
})