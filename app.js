
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Book = require('./Book.model');

var db = 'mongodb://localhost/bookDb'
var port = process.env.PORT | 300;

mongoose.connect(db);

app.listen(port, function(){
	console.log('App listening on Port: ' + port);
}) 