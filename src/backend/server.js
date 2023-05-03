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

  //EVENTUALLY FOR USER ACCOUNT DATA DISPLAY?
  db.connect(function(err){
    if(err) throw err;
    db.query("SELECT * FROM user", function(err,result,fields){
      if(err) throw err;
      console.log(result);
    });
  });

//EDIT
const { promisify } = require('util');
const dbQuery = promisify(db.query).bind(db);
app.post('/itinerary', async(req,res) => { //gets data from the link ending in itinerary
  const trips = req.body.trips; //pulls that data and puts it in this variable
  console.log(trips); // print out what's in the variable UNSUCCESSFUL
  //const sql = 'INSERT INTO itineraries (data) VALUES (?)'; //WHAT SHOULD WORK TO INSERT DATA INTO DB
  //BELOW DOES NOT WORK, JUST A TEST STRING
  const sql = 'INSERT INTO itineraries (data) VALUES ("[[{\"location_id\":\"1960985\",\"name\":\"Great Lakes Distillery\",\"latitude\":\"43.02667\",\"longitude\":\"-87.91864\",\"num_reviews\":\"786\",\"timezone\":\"America/Chicago\",\"location_string\":\"Milwaukee, Wisconsin\"}]")';

  try{
    const result = await dbQuery(sql, [trips]); //combines sql string and the data
    res.json(result);
    console.log(result); //attempt at printing out what's in the DB, UNSUCCESSFUL
  }catch (err) {
    console.error(err);
    res.json('Error');
  }
});

//FAILED ATTEMPT
// const {promisify} = require('util');
// // const saveTrips = require('./../components/Content/Generator/Generator.jsx');
// //const saveTrips = require('./../components/Content/Generator/Generator/saveTrips');
// const saveTrips = require('./../components/Content/Generator/Generator.jsx').saveTrips;
// const sql = "INSERT INTO itineraries (data) VALUES (?)";
// const dbQuery = promisify(db.query).bind(db);

// console.log(test);

// dbQuery(sql,[saveTrips()])
//   .then(result => {
//     console.log("Success");
//   })
//   .catch(err => {
//     throw err;
//   });