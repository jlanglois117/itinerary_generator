import { useState } from "react";

var mysql = require("mysql");
const cors = require("cors");
var express = require("express");
// var app = express();


const { check, validationResult } = require('express-validator');

const app = express();
app.use(express.json());
app.use(cors());

var connection = mysql.createConnection({
    host: "wayne.cs.uwec.edu",
    database: "CS355G1",
    user: "CS355G1",
    password: "15BT76AV"
})

app.post('/signup', (req, res) => {    
  const sql = "INSERT INTO login (fName, lName, username, email, password) VALUES (?)";    
  const values = [        
    req.body.fname, 
    req.body.lname,
    req.body.username,       
    req.body.email,        
    req.body.password    
  ]    
  db.query(sql, [values], (err, data) => {        
    if(err) {            
      return res.json("Error");        
    }       
     return res.json(data);    
    })})

app.post('/login', (req, res) => {    
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";    
  db.query(sql, [req.body.email,req.body.password ], 
    (err, data) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {            
        return res.json(errors);        
      } 
      else {            
        if(err) {               
           return res.json("Error");            
          }            
          if(data.length > 0) {               
             return res.json("Success");            
            } 
            else {                
              return res.json("Failure");            
            }        
          }           
         })})

app.listen(3000, ()=>{
  console.log("listening")
})

connection.connect(function(err){
  if(err) throw err;
  connection.query("SELECT * FROM user", function(err,result,fields){
    if(err) throw err;
    console.log(result);
  });
});

const [user, setUser] = useState({}); //NEW
useEffect(() => {
  fetchUserData();
}, []);
const fetchUserData = async () => {
  try {
      const response = await fetch('http://localhost:3000/user');
      const data = await response.json();
      setUser(data);
      console.log(user.username);
  }catch(error){
      console.error(error);
  }
};

