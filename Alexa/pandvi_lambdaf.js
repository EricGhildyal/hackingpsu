
/**
 * Examples:
 *  User: "Alexa, Pandvi"
 *  Alexa: "Hello World!"
 */

/**
 * App ID for the skill
 */
var APP_ID = undefined; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

var Pandvi = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Pandvi.prototype = Object.create(AlexaSkill.prototype);
Pandvi.prototype.constructor = Pandvi;

Pandvi.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("Pandvi onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Pandvi.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Pandvi onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    //var speechOutput = "fuck you responder";
    //var repromptText = "You can say hello";
    //response.ask(speechOutput, repromptText);
};

Pandvi.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("Pandvi onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Pandvi.prototype.intentHandlers = {
    // register custom intent handlers
    "GetRecipeWithIngredient": function (intent, session, response) {

      var ingred = 0
      //session is object! pass session through for good things to happen
        response.tellWithCard(" Recipe is ");
    },
    "GetRecipeWithCalories": function (intent, session, response) {
        response.tellWithCard("Recipe is!");
    },
    "GetRecipeWithIngredientCalories": function (intent, session, response) {
        response.tellWithCard("Recipe is");
    },
    "QuestionQuery": function (intent, session, response) {
        response.tellWithCard(" spoonacular says ");
    },
    "GetNutritionDetails": function (intent, session, response) {
        response.tellWithCard("nutrition values for are");
    },
    "UpdateUserDataCalories": function (intent, session, response) {
        response.tellWithCard("Hello World!", "Hello World", "Hello World!");
    },
    "UpdateUserDataFood": function (intent, session, response) {
        response.tellWithCard("Hello World!", "Hello World", "Hello World!");
    },"PopulateToCart": function (intent, session, response) {
        response.tellWithCard("Hello World!", "Hello World", "Hello World!");
    },
    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can say hello to me!", "You can say hello to me!");
    }
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the Pandvi skill.
    var Pandvi = new Pandvi();
    Pandvi.execute(event, context);
};
