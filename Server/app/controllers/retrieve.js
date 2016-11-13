// app/controllers/retrieve.js

var Message = require('../models/user');

exports.output = function(callback){
  Message.find({}, function(err, items) {
    callback(items);
  });
};
