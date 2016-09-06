var factory = require("sails-factory");
var faker = require('faker');

module.exports = function(factory) {
  factory.define('book')
    .attr("name", faker.lorem.sentence)
    .attr("description", faker.lorem.paragraph)
    .attr("authorName", faker.name.firstName)
    .attr("publisherName", faker.lorem.words)
    .attr("publishedDate", faker.date.past)
    .attr("unitPrice", faker.random.number)
    // .attr("photo", faker.random.image)
    .attr("totalRatingValue", faker.random.number)
    .attr("totalRatingCount", faker.random.number)
    .attr("owner", 1);
};
