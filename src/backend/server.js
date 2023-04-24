const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json());


const db = mysql.createConnection({
    host: 'wayne.cs.uwec.edu',
    user: 'CS335G1',
    password: '15BT76AV',
    database: 'user'
  });
  
  app.post('/register', (req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
  
    db.query("INSERT INTO user (fname, lname, username, email, password VALUES (?,?,?,?,?)", 
    [fname, lname, username, email, password]
    );
  });