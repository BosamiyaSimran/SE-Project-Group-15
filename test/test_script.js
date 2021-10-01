let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../code/app.js');

describe('Translation', ()=>{

    describe('/translateText', () => {
        it('it should return an object', (done)=>{
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

    describe('/translateText', () => {
        it('it should translate the text', (done)=>{
            chai.request(server)
            .post('/translateText')
            .set('content-type', 'application/json')
            .send({ text: 'नमस्ते', toLanguage: 'English' })
            .end((err, res) => {
                (res.body['text']).should.be.equal( 'Hi' );
                done();
            });
        });
    });
    
    describe('/translateText', () => {
        it('it should translate the text', (done)=>{
            chai.request(server)
            .post('/translateText')
            .set('content-type', 'application/json')
            .send({ text: 'Hi', toLanguage: 'Gujarati' })
            .end((err, res) => {
                // console.log(res.body, typeof(res.body), { "text": 'Hi' }, typeof({ "text": 'Hi' }), res.body == { "text": 'Hi' });
                (res.body['text']).should.be.equal( 'હાય' );
                done();
            });
        });
    });


    describe('/translateText', () => {
        it('it should translate the text', (done)=>{
            chai.request(server)
            .post('/translateText')
            .set('content-type', 'application/json')
            .send({ text: 'Hi', toLanguage: 'French' })
            .end((err, res) => {
                // console.log(res.body, typeof(res.body), { "text": 'Hi' }, typeof({ "text": 'Hi' }), res.body == { "text": 'Hi' });
                (res.body['text']).should.be.equal( 'salut' );
                done();
            });
        });
    });

    describe('/translateText', () => {
        it('response status should be in between 200 and 300', (done)=>{
            chai.request(server)
            .post('/translateText')
            .set('content-type', 'application/json')
            .send({ text: 'Hi', toLanguage: 'French' })
            .end((err, res) => {
                 (res.status).should.satisfy(function (num) {
                    if ((num >= 200) || (num <= 300)) {
                        return true;
                    } else {
                        return false;
                    }
                });
                done();
            });
        });
    });

    describe('/translateText', () => {
        it('response status should be 500 as text is empty', (done)=>{
            chai.request(server)
            .post('/translateText')
            .set('content-type', 'application/json')
            .send({ text: '', toLanguage: 'French' })
            .end((err, res) => {
                 (res.status).should.be.equal(500);
                done();
            });
        });
    });

    describe('/translateText', () => {
        it('text should not be empty error', (done)=>{
            chai.request(server)
            .post('/translateText')
            .set('content-type', 'application/json')
            .send({ text: '', toLanguage: 'French' })
            .end((err, res) => {
                console.log(res.body['error']);
                 (res.body['error']).should.be.equal('Text cannot be empty. Please select text');
                done();
            });
        });
    });

    describe('/translateText', () => {
        it('text should not be empty error', (done)=>{
            chai.request(server)
            .post('/translateText')
            .set('content-type', 'application/json')
            .send({ text: 'Hi', toLanguage: null })
            .end((err, res) => {
                console.log(res.body['error']);
                 (res.body['error']).should.be.equal('Please select a language');
                done();
            });
        });
    });

});
