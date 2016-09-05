
var sails = require('sails');

before(function(done) {
  // Increase the Mocha timeout so that Sails has enough time to lift.
  this.timeout(5000);

  sails.lift({
    // configuration for testing purposes
    port: 1336,
    environment: 'test',
  }, function(err, server) {
    if (err) return done(err);

    require("sails-factory").load();
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});
