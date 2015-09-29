var mysql = require('mysql');

var db = mysql.createConnection({
	host: '[[change me]]',
	user: '[[change me]]',
	password: '[[change me]]',
	database: '[[[change me]]]'
});

db.connect();

module.exports = db;
