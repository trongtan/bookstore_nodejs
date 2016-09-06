var request = require('supertest');

describe('BookController', function() {
   describe('#index()', function() {
    it('should render book listing page', function (done) {
      request(sails.hooks.http.app)
        .post('/book')
        .expect(200, done);
    });
  });
});
