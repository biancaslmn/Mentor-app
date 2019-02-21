// const auth = firebase.auth ();

// //Signing In with Email and Password
// auth.signInWithEmailAndPassowrd (email, password);

// //Create New User with Email and Password
// auth.createUserWithEmailAndPassword (email, password);

//Monitor Auth State

var mysql = require('mysql');
var express = require('express');
var app = express();

// Set up connection to database.
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mentor_db',
  port: "8889"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// Connect to database.
// connection.connect();
app.get('/Landing', function (rep, res) {
   
    var query = connection.query('SELECT * FROM users', function(err, result) {
    //   list.push('+' +result+ '') ;
      console.log([result]);

      
        
    });
    res.send({result});
})

// Listen to POST requests to /users.
app.post('/users', function(req, res) {
  // Get sent data.
  var user = req.body;
  // Do a MySQL query.
  var query = connection.query('INSERT INTO users SET ?', user, function(err, result) {
    // Neat!
  });
  res.end('Success');
});

app.listen(3002, function() {
  console.log('Example app listening on port 3002!');
});