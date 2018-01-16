var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var WineSchema = new Schema({
  winery: String,
  name: String,
  //type: String,
  vintage: String,
  //varietal: String,
  //region: String,
  //country: String
});

module.exports = mongoose.model('Wine', WineSchema);
