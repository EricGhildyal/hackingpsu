// app/routes.js

var Spoon = require('./controllers/spoon.js');

module.exports = function(app){

  app.get('/query', function(req, res){
    Spoon.output(req, function(data){
      //TODO: add all the things
  });
};
