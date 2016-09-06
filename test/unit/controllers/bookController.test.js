var request = require('supertest');
var factory = require("sails-factory");
var chai = require('chai');

describe('BookController', function() {
  var bookInfo, otherBookInfo

  beforeEach(function () {
    bookInfo = factory.build("book")

    Category.create(factory.build("category"), function (err, category) {})
    Book.create(bookInfo, function (err, book) {});

    otherBookInfo = factory.build("book")
    otherBookInfo.owner = 2
    Book.create(otherBookInfo, function (err, book) {});
  });

  describe('#index()', function() {
    describe('missing categoryId in the param', function() {
      it('should return all books', function (done) {
        request(sails.hooks.http.app)
          .get('/book')
          .expect(function(res) {
            res.should.be.html;
            chai.expect(res.text).to.contain(bookInfo.name);
          })
          .expect(200, done);
      });
    });

    describe('valid category id', function() {
      it('should return all books belong to the given category', function (done) {
        request(sails.hooks.http.app)
          .get('/book?categoryId=1')
          .expect(function(res) {
            res.should.be.html;
            chai.expect(res.text).to.contain(bookInfo.name);
            chai.expect(res.text).to.not.contain(otherBookInfo.name);
          })
          .expect(200, done);
      });
    });

    describe('invalid category id', function() {
      it('redirect to /book page', function (done) {
        request(sails.hooks.http.app)
          .get('/book?categoryId=invalidCategory')
          .expect(302)
          .expect('location','/book', done);
      });
    });
  });
});
