var mysql = require("mysql");
const cors = require("cors");
var express = require("express");
const session = require('express-session');

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

//SESSION STUFF NEW
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUninitialized: true
}));

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

// function getUserById(userId, callBack){
//   connection.query('SELECT * FROM user WHERE id = ?', [userId], (err,result,fields) => {
//     if(error) {
//       return callBack(err,null);
//     }
//     callBack(null,result[0]);
//   });
// }

//SESSION STUFF
app.get('/account', (req,res) => {
  const userId = req.session.userId;
  // getUserById(userId, callBack){
  //     connection.query('SELECT * FROM user WHERE id = ?', [userId], (err,result,fields) => {
  //       if(error) {
  //         return callBack(err,null);
  //       }
  //       callBack(null,result[0]);
  //     });
  //   }
  // const userData = getUserById(userId,)
})

//SHOULD USE
// app.post('/account', (req, res) => {
//   const sql = "SELECT * FROM user WHERE id = ?";
//   connection.query(sql,[req.body.id], function(err,result,fields) {
//     if(err) throw err;
//     console.log(result);
//   });
// });

//WORKS BUT NOT RIGHT
// connection.connect(function(err){
//   if(err) throw err;
//   connection.query("SELECT * FROM user WHERE id = 1", function(err,result,fields){
//     if(err) throw err;
//     console.log(result);
//   });
// });