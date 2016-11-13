// app/controllers/retrieve.js

var unirest = require('unirest');
var Usr = require('../models/user');

exports.question = function(req, callback){
  // var qes = req._parsedUrl.query.replace(/ /g,"+");
  var qes = req._parsedUrl.query;
  unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/quickAnswer?q=" + qes)
  .header("X-Mashape-Key", "4OhDFJwzCVmshvw3a0ZUfe52n9bTp15t24FjsnnVQF0UvGemp0")
  .header("Accept", "application/json")
  .end(function (result) {
    console.log(result.body);
  });
};
