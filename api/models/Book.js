/**
 * Book.js
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

    description: {
      type: 'string',
      required: true
    },

    authorName: {
      type: 'string'
    },

    publisherName: {
      type: 'string'
    },

    publishedDate: {
      type: 'date'
    },

    unitPrice: {
      type: 'float'
    },

    photo: { // The photo column is a string representing the path of the photo in the web server.
      type: 'string'
    },

    totalRatingValue: { //The total rating value is the total/sum of all ratings for this book by all users.
      type: 'float'
    },

    totalRatingCount: { //The total rating count is the total number of times this book is rated by users.
      type: 'integer'
    }
  }
};
