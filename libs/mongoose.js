var mongoose = require('mongoose');
var log = require('./log')(module);
var config = require('./config');

mongoose.Promise = global.Promise;

mongoose.connect(config.get('mongoose:uri'));

var db = mongoose.connection;

db.on('error', function (err) {
  log.error('Connection error: ', err.message);
});

db.once('open', function callback() {
  log.info("Connected to DB!");
});

module.exports = mongoose;