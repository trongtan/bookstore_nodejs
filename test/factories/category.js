var factory = require("sails-factory");
var faker = require('faker');

module.exports = function(factory) {
  factory.define('category')
    .attr("name", faker.lorem.words)
    .attr("sortOrder", 1)
};
