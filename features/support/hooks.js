// Hooks can be used to prepare and clean the environment before and after each scenario is executed.
// Hooks can use callbacks, return promises, or be synchronous. 
//The first argument to hooks is always the current scenario. See Cucumber.Api.Scenario for more information.

var myHooks = function () {
  this.Before(function (scenario) {
    // Just like inside step definitions, "this" is set to a World instance.
    // It's actually the same instance the current scenario step definitions
    // will receive.

    // Let's say we have a bunch of "maintenance" methods available on our World
    // instance, we can fire some to prepare the application for the next
    // scenario:
    console.log("Before " + scenario);
  });
};

module.exports = myHooks;
