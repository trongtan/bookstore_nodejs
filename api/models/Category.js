/**
 * Category.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    sortOrder: {
      type: 'integer' //The sort order determines the order of the category in relative to other categories
    },

    books: {
      collection: 'book',
      via: 'owner'
    }
  },
}
