var should = require('chai').should;
var expect = require('chai').expect;
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
          expect(err).to.be.null

          expect(book.name).to.equal(bookInfo.name);
          expect(book.description).to.equal(bookInfo.description);
          expect(book.unitPrice).to.equal(bookInfo.unitPrice);
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
          expect(err).to.exist
          expect(err.invalidAttributes.name).to.exist

          expect(book).to.be.undefined
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
          expect(err).to.exist
          expect(err.invalidAttributes.unitPrice).to.exist

          expect(book).to.be.undefined
          done();
        });
      })
    });
  });
});
