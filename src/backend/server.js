var mysql = require("mysql");
// var express = require("express");
// var app = express();

var connection = mysql.createConnection({
    host: "wayne.cs.uwec.edu",
    database: "CS355G1",
    user: "CS355G1",
    password: "15BT76AV"
})

connection.connect(function(err){
  if(err) throw err;
  connection.query("SELECT * FROM user", function(err,result,fields){
    if(err) throw err;
    console.log(result);
  });
});