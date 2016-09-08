/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res, next) {
     BookService.getBooks(req.param('categoryId'), function(books) {
      res.json(books);
    });
  }
};
