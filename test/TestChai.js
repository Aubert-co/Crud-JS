/*const chai = require('chai')
const {expect} = require('chai')
const should = chai.should()
const chaiHTTP = require('chai-http')
const app = require('../App/serve')


chai.use(chaiHTTP)
chai.should()


describe('APIS Itens ',()=>{
    it('should return a status 200 and a data array get/itens',(done)=>{
        chai.request(app)
        .get('/api/itens')
        .end((err,res)=>{
            if(err)done(err)

            
            res.should.have.status(200)
            expect(res.body).to.be.a('array')

            done()
        })
    })

    it('should return a status 200 and a sucessl menssage when send correct datas to post/itens',(done)=>{
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
    it('should return a status 404 and a error menssage when send wrong datas to post/itens',(done)=>{
        chai.request(app)
        .post('/api/itens')
        .set({'Content-Type':'application/json'})
        .send({name_item:12,price_item:'e'})
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(404)

            expect(res.body).to.deep.own.include({msg:'wrong datas'})
            done()
        })
    })

    it('should return a status 200 and a sucessful msg when send correct id to delete/itens',(done)=>{
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

            expect(res.body).to.deep.own.include({msg:'not found'})

            done()
        })
    })

    it('should return a status 200 when send a correct values to put/updateItens ',(done)=>{
        chai.request(app)
        .put('/api/UpdteItens')
        .set({'Content-Type':'application/json'})
        .send({id:15,name_item:'camisa',price_item:15})
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(200)

            expect(res.body).to.deep.own.include({msg:'update sucessful'})

            done()
        })
    })

    it('should return a status 404 when send a wrongs values to put/uptadeItens ',(done)=>{
        chai.request(app)
        .put('/api/UpdteItens')
        .set({'Content-Type':'application/json'})
        .send({id:'ee',name_item:'',price_item:''})
        .end((err,res)=>{
            if(err)done(err)

            res.should.have.status(404)

            expect(res.body).to.deep.own.include({msg:'not found'})

            done()
        })
    })
})*/