var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var GroceryList = require('./server/list');

var app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(require('connect-livereload')({port: 35729}));

app.use(express.static('app'));

// Main React app
app.get('/', function(req, res){
	res.status(200).sendFile(path.join(__dirname + '/app/index.html'));
});

// API Routes
app.get('/api/', function(req, res){
	res.status(200).send('Entry point');
});

app.get('/api/getList', function(req, res){
	res.status(200).send( GroceryList.getList() );
});

app.listen('3000');

module.exports = app;