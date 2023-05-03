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
    const sql = "INSERT INTO user (fName, lName, username, email, password) VALUES (?)";    
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

  app.listen(3306, ()=>{ //change back to 3306
    console.log("listening")
  })

  db.connect(function(err){
    if(err) throw err;
    db.query("SELECT * FROM user", function(err,result,fields){
      if(err) throw err;
      console.log(result);
    });
  });

//EDIT
const {promisify} = require('util');
const saveTrips = require('./../components/Content/Generator/Generator.jsx');
const sql = "INSERT INTO itineraries (data) VALUES (?)";
const dbQuery = promisify(db.query).bind(db);

console.log(test);

dbQuery(sql,[saveTrips()])
  .then(result => {
    console.log("Success");
  })
  .catch(err => {
    throw err;
  });
