// app/routes.js

var Spoon = require('./controllers/spoon.js');

module.exports = function(app){

  app.get('/query', function(req, res){
    Spoon.question(req, function(data){
      // console.log(data);
      res.send(data);
    });
  });


}
