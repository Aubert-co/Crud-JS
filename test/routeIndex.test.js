const chai = require('chai')
const {expect} = require('chai')
const should = chai.should()
const chaiHTTP = require('chai-http')
const app = require('../App/serve')


chai.use(chaiHTTP)
chai.should()


describe('APIS Itens ',()=>{
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


    it('should return a status 200 and a sucessful msg when send correct id ',(done)=>{
        chai.request(app)
        .delete('/api/deleteItens')
        .set({'Content-Type':'application/json'})
        .send({id:12})
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(200)

            expect(res.body).to.deep.own.include({msg:'delete sucessful'})

            done()
        })
    })
    it('should return a status 200 and a sucessful msg when send an array',(done)=>{
        chai.request(app)
        .delete('/api/deleteItens')
        .set({'Content-Type':'application/json'})
        .send({id:[1,2,3]})
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(200)

            expect(res.body).to.deep.own.include({msg:'delete sucessful'})

            done()
        })
    })

    it('should return a status 404 and a error msg when send wrong id ',(done)=>{
        chai.request(app)
        .delete('/api/deleteItens')
        .set({'Content-Type':'application/json'})
        .send({id:'ee'})
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(404)

            expect(res.body).to.deep.own.include({msg:'erro ao deletar'})

            done()
        })
    })
})