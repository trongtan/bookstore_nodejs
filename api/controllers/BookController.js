/**
 * BookController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

function renderBookIndexPage(res, books) {
  res.json(books);
  // res.view({
  //   books: books
  // });
};

module.exports = {
  index: function (req, res, next) {
    var categoryId = req.param('categoryId')

     BookBrowserService.getBooks(categoryId, function(books) {
      res.json(books);
    });


    // if (!categoryId) {
    //   Book.find( function (err, books) {
    //     if (err) return next(err);
    //       renderBookIndexPage(res, books)
    //   });
    // } else {
    //   Category.findOneById(categoryId).populate('books').exec(function (err, category) {
    //     if (err || category == undefined) {
    //       res.redirect('/book')
    //       return
    //     }

    //     renderBookIndexPage(res, category.books)
    //   })
    // }
  }
};
