

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
    db.query(sql, [req.body.email,req.body.password], 
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

          const { promisify } = require('util');
          const dbQuery = promisify(db.query).bind(db);

           app.get('/userData', async(req,res) => {
            
            const sql = "SELECT id, fname, lname, username FROM user WHERE email = ?";
            try{
              const result = await dbQuery(sql, [req.body.email]);
              if(result.length > 0){
                res.json(result[0].data);
                //console.log('from select'); //test
                //console.log(result[0].data); //test
              }else{
                res.status(404).json('no data');
              }
            }catch(err) {
              console.error(err);
              res.status(500).json('internal serve issue');
            }
          });

    
          

  app.listen(3306, ()=>{
    console.log("listening")
  })

    //storing itineraries
   
  
    app.post('/itinerary', async(req,res) => { //gets data from the link ending in itinerary
      const trips = req.body.tripsJson; //pulls that data and puts it in this variable
      console.log('its from itinerary post');
      console.log(req.body.tripsJson);
      const sql = 'INSERT INTO itineraries (data) VALUES (?)'; 
      try{ 
        const result = await dbQuery(sql, [trips]); //combines sql string and the data
        console.log('insert');
        res.json(result);
        console.log(result); //attempt at printing out what's in the DB, UNSUCCESSFUL
      }catch (err) {
        console.error(err);
        res.json('Error');
      }
    });
  
    app.get('/itinerary', async(req,res) => {
      const sql = "SELECT data FROM itineraries LIMIT 3";
      try{
        const result = await dbQuery(sql);
        if(result.length > 0){
          res.json(result[0].data);
          //console.log('from select'); //test
          //console.log(result[0].data); //test
        }else{
          res.status(404).json('no data');
        }
      }catch(err) {
        console.error(err);
        res.status(500).json('internal serve issue');
      }
    });
  
  