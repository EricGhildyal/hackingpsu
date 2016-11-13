// app/routes.js

var Spoon = require('./controllers/spoon.js');

module.exports = function(app){

  app.get('/query', function(req, res){
    Spoon.question(req, function(data){
      //TODO: add all the things
    });
  });

  
}
