
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Book = require('./Book.model');

var db = 'mongodb://localhost/bookDb'
var port = process.env.PORT | 300;

mongoose.connect(db);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}))


app.get('/', function(req, res){

	res.send('<html><head></head><body><h2>Welcome Mongoose</h2></body></html>');
});

app.get('/books', function(req, res){

	Book.find({}).exec(function(err, books){
		if(err){
			res.send("An error occured while fetching Data");
		}else{
			res.json(books);
		}
	})
});

app.get('/books/:id', function(req, res){
	
	console.log("Getting one book");

	Book.findOne({ _id: req.params.id })
	.exec(function(err, book){

		if(err){
			res.send('Could not find the Book');
		}else{
			res.json(book);
		}
	});
});

app.post('/books', function(req, res){

	console.log("In app.post method for books")
	var newBook = new Book();

	newBook.title = req.body.title;
	newBook.author = req.body.author;
	newBook.category = req.body.category;

	newBook.save(function(err, book){
		if(err){
			console.log("Error saving file");
		}else{
			console.log(book);
			res.send(book);
		}
	});

});

app.post('/books2', function(req, res){

	Book.create(req.body, function(err, book){
		if(err){
			console.log("Error saving file");
		}else{
			console.log(book);
			res.send(book);
		}
	});

});

app.listen(port, function(){
	console.log('App listening on Port: ' + port);
}) 
