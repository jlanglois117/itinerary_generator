const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const { check, validationResult } = require('express-validator');

const app = express();
app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
    host: 'wayne.cs.uwec.edu',
    user: 'CS355G1',
    password: '15BT76AV',
    database: 'CS355G1'
  });
  
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

  app.listen(3306, ()=>{
    console.log("listening")
  })