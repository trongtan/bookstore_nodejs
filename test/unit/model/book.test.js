var should = require('should');
var expect = require('expect.js');
var factory = require("sails-factory");

describe('BookModel', function() {
  describe('validation()', function() {
    var bookInfo

    beforeEach(function () {
        bookInfo = factory.build("book")
    });

    describe('provide required fields', function() {
      it('does not throw any err', function (done) {
        Book.create(bookInfo, function bookCreated (err, book) {    
          should.not.exist(err);

          expect(book.name).to.be(bookInfo.name);
          expect(book.description).to.be(bookInfo.description);
          expect(book.unitPrice).to.be(bookInfo.unitPrice);
          done();
        });
      });
    });

    describe('missing book name', function() {
      beforeEach(function () {
        bookInfo.name = ""
      });

      it('should throw an error', function (done) {
        Book.create(bookInfo, function bookCreated (err, book) {     
          should.exist(err);

          expect(book).to.be(undefined);
          done();
        });
      })
    });

    describe('unit price is lower than 0', function() {
      beforeEach(function () {
        bookInfo.unitPrice = 0
      });

      it('should throw an error', function (done) {
        Book.create(bookInfo, function bookCreated (err, book) {     
          should.exist(err);

          expect(book).to.be(undefined);
          done();
        });
      })
    });
  });
});
