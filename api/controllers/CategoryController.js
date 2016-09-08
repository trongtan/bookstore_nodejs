/**
 * CategoryController
 *
 * @description :: Server-side logic for managing books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function (req, res, next) {
     CategoryService.getCategories(function(categories) {
      res.json(categories);
    });
  }
};
