var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "wayne.cs.uwec.edu",
    database: "CS355G1",
    user: "CS355G1",
    password: "15BT76AV"
});

module.exports = connection;


// var mysql = require("mysql");
// var express = require("express");
// var app = express();

// app.get('/',function(req,res) {
//     res.send('hi');
// //   let sql = "SELECT * FROM user";
// //   connection.query(sql, function(err, results) {
// //     if(err) throw err;
// //     res.send(results);
// //   });
// });

// app.listen(3000, function() {
//     console.log('listen on 3000');
//     // console.log('listen on 3000');
//     // connection.connect(function(err) {
//     //     if(err) throw err;
//     //     console.log('connected');
//     // })
// });





// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: "wayne.cs.uwec.edu",
//     database: "CS355G1",
//     user: "CS355G1",
//     password: "15BT76AV"
// });

// connection.connect();

// module.exports = connection;