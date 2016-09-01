/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res, next) {
    Book.find(function (err, books) {
      if (err) return next(err);
      
      res.view({
        books: books
      });
    });
  }
};

