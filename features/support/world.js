var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var zombie = require('zombie');

function World() {
  this.browser = new zombie(); 

  // this.browser = new webdriver.Builder()
    // .forBrowser('chrome')
    // .build();

  this.visit = function (url, callback) {
    this.browser.visit(url, callback);
  };

  this.quit = function (callback) {
    this.browser.quit();
    callback();
  };
}

module.exports = function() {
  this.World = World;
};
