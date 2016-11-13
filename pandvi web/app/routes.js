//app/routes.js

module.exports = function(app)
{

  app.get('/', function(req, res){
    res.render(__dirname + '/views/home.ejs');
  });

  app.get('/about', function(req, res){
    res.render(__dirname + '/views/about.ejs');
  });

  app.get('/doctors', function(req, res){
    res.render(__dirname + '/views/doctors.ejs');
  });

  app.get('/personal', function(req, res){
    res.render(__dirname + '/views/personal.ejs');
  });

  app.get('/contact', function(req, res){
    res.render(__dirname + '/views/contact.ejs');
  });

}
