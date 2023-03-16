const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);


suite('Functional Tests', function() {
  test('Valid input of 10L', function(done){
    chai
      .request(server)
      .get('/api/convert?input=10L')
      .end(function (err, res){
        assert.equal(res.status, 200, 'Status of 200')
        assert.equal(res.text, '{"initNum":10,"initUnit":"L","returnNum":2.64172,"returnUnit":"gal","string":"10 liters converts to 2.64172 gallons"}')
        done();
      });
  });
  test('Invalid unit 32G', function(done){
    chai
      .request(server)
      .get('/api/convert?input=32G')
      .end(function (err, res){
        assert.equal(res.status, 200, 'Status of 200')
        assert.equal(res.text, 'invalid unit')
        done();
      });
  });
  test('Invalid unit 3/7.2/4kg', function(done){
    chai
      .request(server)
      .get('/api/convert?input=3/7.2/4kg')
      .end(function (err, res){
        assert.equal(res.status, 200, 'Status of 200')
        assert.equal(res.text, 'invalid number')
        done();
      });
  });
    test('Invalid number and unit 3/7.2/4kilomegagram', function(done){
    chai
      .request(server)
      .get('/api/convert?input=3/7.2/4kilomegagram')
      .end(function (err, res){
        assert.equal(res.status, 200, 'Status of 200')
        assert.equal(res.text, 'invalid number and unit')
        done();
      });
  });
});
