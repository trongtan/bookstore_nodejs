module.exports = {
  getBooks: function(categoryId, next) {
    if (!categoryId) {
      Book.find( function (err, books) {
        if(err) throw err;
        
        next(books);
      });
    } else {
      Category.findOneById(categoryId).populate('books').exec(function (err, category) {
        if(err) throw err;

        next(category.books);
      })
    }
  },
};
