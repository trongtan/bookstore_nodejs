module.exports = {
  getCategories: function(next) {
    Category.find( function (err, categories) {
      if(err) throw err;
      
      next(categories);
    });
  },
};
