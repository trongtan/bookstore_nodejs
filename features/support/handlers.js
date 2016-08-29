// You can register event handlers for the following events within the cucumber lifecycle.
// BeforeFeatures 
// BeforeFeature
// BeforeScenario
// BeforeStep
// StepResult
// AfterStep
// ScenarioResult
// AfterScenario
// AfterFeature
// FeaturesResult
// AfterFeatures

var myHandlers = function () {
  this.registerHandler('AfterFeatures', function (features, callback) {
    // clean up!
    // There is no World instance available on `this`
    // because all scenarios are done and World instances are long gone.
    console.log("AfterFeatures")
    callback();
  });
}

module.exports = myHandlers;