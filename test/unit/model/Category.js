var should = require('chai').should;
var expect = require('chai').expect;
var factory = require("sails-factory");

describe('CategoryModel', function() {
  describe('validation()', function() {
    var categoryInfo

    beforeEach(function () {
        categoryInfo = factory.build("category")
    });

    describe('provide required fields', function() {
      it('does not throw any err', function (done) {
        Category.create(categoryInfo, function (err, category) {   
          expect(err).to.be.null

          expect(category.name).to.equal(bookInfo.name);
          expect(category.sortOrder).to.equal(bookInfo.sortOrder);
          done();
        });
      });
    });

    describe('missing category name', function() {
      beforeEach(function () {
        categoryInfo.name = ""
      });

      it('should throw an error', function (done) {
        Category.create(categoryInfo, function (err, category) {     
          expect(err).to.exist
          expect(err.invalidAttributes.name).to.exist

          expect(category).to.be.undefined
          done();
        });
      })
    });
  });
});
