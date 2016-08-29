var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

function World() {
  var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

  this.visit = function (url, callback) {
    driver.get(url);
    driver.findElement(By.name('q')).sendKeys('webdriver');
    driver.findElement(By.name('btnG')).click();
    driver.wait(until.titleIs('webdriver - Google Search'), 10000);
    callback();
  };

  this.quit = function (callback) {
    driver.quit();
    callback();
  };
}

module.exports = function() {
  this.World = World;
};
