var mysql;
var connection;
var post;



connection.query('INSERT INTO positions SET ?', post, function(err, result) {
  // Neat!
  
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'nabilio',
  database : "map"
});
var post  = {id:1 , geomap: 'Hello', code:33 }; 
  
  
});

connection.connect(function(err) {
  // connected! (unless `err` is set)
});
