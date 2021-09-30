let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../code/app.js');

describe('Translation', ()=>{

    describe('/translateText', () => {
        it('it should translate the text', (done)=>{
            chai.request(server)
            .post('/translateText')
            .set('content-type', 'application/json')
            .send({ text: 'hello', toLanguage: 'Hindi' })
            .end((err, res) => {
                (res).should.be.a('object');
                done();
            });
        });
    });

})