var app = require('../server');
var request = require('superagent');
var should = require('should');
var GroceryList = require('../server/list');

describe('server', function () {

	it('should work', function (done) {
		done();
	});

	it('should return a valid object for GroceryList module', function (done) {
		if(typeof GroceryList === 'object'){
			done();
		}
	});

	it('should return a 200 code for /api and return text: "Entry point" [Get /api]', function (done) {
		request
		.get('http://localhost:3000/api')
		.end(function (err, res) {
			res.status.should.equal(200);
			res.text.should.equal('Entry point');
			done();
		});
	});

	it('should return a 200 code for /api/getList and return an array [Get /api/getList]', function (done) {
		request
		.get('http://localhost:3000/api/getList')
		.end(function (err, res) {
			res.status.should.equal(200);
			console.log(typeof JSON.parse(res.text));
			if(Array.isArray( JSON.parse(res.text) )){
				done();
			}
		});
	});

});