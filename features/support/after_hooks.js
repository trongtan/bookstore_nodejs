var myAfterHooks = function () {
  this.After(function (scenario) {
    // Again, "this" is set to the World instance the scenario just finished
    // playing with.

    // We can then do some cleansing:

    // this.emptyDatabase();
    // this.shutdownFullTextSearchServer();
    console.log("After " + scenario.name);
  });
};

module.exports = myAfterHooks;