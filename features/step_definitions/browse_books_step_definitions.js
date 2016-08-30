// undefined (no matching stepdef)
// pending (a matching stepdef that throws PendingException)
// passed (a matching stepdef that doesn't throw anything)
// failed (a matching stepdef that throws an exception that isn't PendingException)
// skipped (a step following a step that threw any exception (undefined, pending or failed))

var sails = require('sails');

module.exports = function () {
  this.Given(/^There're some existing books in the system$/, function (callback) {
    callback();
  });

  this.Then(/^I go to home page$/, function (callback) {
    this.visit("http://localhost:3000", callback)
  });

  this.Then(/^I should see "(.*)" as the title page$/, function (title, callback) {
    var pageTitle = this.browser.text('title');
    if (title === pageTitle) {
      callback();
    } else {
      callback(new Error("Expected to be on page with title " + title));
    }
  });

  this.Then(/^I should see all books are listed on the home page$/, function (callback) {
    callback(null, 'pending');
  });
}
