// app/routes.js

var retrieve = require('./controllers/retrieve.js');

module.exports = function(app){

  app.get('/query', function(req, res){
    retrieve.output(function(data){
      //TODO: add all the things
  });
};
