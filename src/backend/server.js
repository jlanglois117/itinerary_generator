// var mysql = require("mysql");
// var express = require("express");
// var app = express();

// var connection = mysql.createConnection({
//     host: "wayne.cs.uwec.edu",
//     database: "CS355G1",
//     user: "CS355G1",
//     password: "15BT76AV"
// })

// app.get('/',function(req,res) {
//   let sql = "SELECT * FROM user";
//   connection.query(sql, function(err, results) {
//     if(err) throw err;
//     res.send(results);
//   });
// });

// app.listen(3000, function() {
//     console.log('listen on 3000');
//     connection.connect(function(err) {
//         if(err) throw err;
//         console.log('connected');
//     })
// });

// const express = require("express");
// const mysql = require("mysql");

// const app = express();
// app.use(express.json());


// const db = mysql.createConnection({
//     host: 'wayne.cs.uwec.edu',
//     user: 'CS335G1',
//     password: '15BT76AV',
//     database: 'user'
//   });
  
//   app.post('/register', (req, res) => {
//     const fname = req.body.fname;
//     const lname = req.body.lname;
//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;
  
//     db.query("INSERT INTO user (fname, lname, username, email, password VALUES (?,?,?,?,?)", 
//     [fname, lname, username, email, password]
//     );
//   });