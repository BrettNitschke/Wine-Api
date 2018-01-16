var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
dotenv.load();

var mongoose = require('mongoose');
var connectionString = process.env.connectionString;
mongoose.connect(connectionString, {
  useMongoClient: true,
});

var Wine = require('./models/wines');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 3000;

var router = express.Router();


var api = require('./routes/api');

app.use('/api', api);

app.listen(port);
console.log('connected on port: ' + port);
console.log('connection string = ' + connectionString);

module.exports = app;
