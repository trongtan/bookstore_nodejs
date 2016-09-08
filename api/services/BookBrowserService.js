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
  // addTodo: function(todoVal, next) {
  //   Todo.create({value: todoVal}).exec(function(err, todo) {
  //     if(err) throw err;
  //     next(todo);
  //   });
  // },
  // removeTodo: function(todoVal, next) {
  //   Todo.destroy({value: todoVal}).exec(function(err, todo) {
  //     if(err) throw err;
  //     next(todo);
  //   });
  // }
};
