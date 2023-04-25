import React from "react";

import { InputLabel, Box, TextField, Button, Container } from "@material-ui/core";

import useStyles from './styles';
import { useState, useEffect } from "react";

const User = () => {
    var mysql = require("mysql");
    var express = require("express");
    var app = express();
    var connection = require('./dbConnection');

    app.get('/',function(req,res) {
        res.send('hi');
    });

    app.listen(3000, function() {
        console.log('listen on 3000');
        connection.connect(function(err) {
            if(err) throw err;
            console.log('connected');
        })
    });




    const classes = useStyles();
    //editing
    const [isDisabled, setIsDisabled] = useState(true);
    const [variant, setVariant] = useState("filled");
    const variantChange = () => {
        setVariant("outlined");
    }
    //data
    const [username, setUsername] = useState([]);
    useEffect(() => {
        const getUsername = async () => {
            const res = await fetch('http://localhost:3000/');
            const getData = await res.json();
            setUsername(getData);
            //console.log(getData);
        }
        getUsername();
    }, []);

    return(
        <React.Fragment>
            <Container>
                <TextField id="tf" size="small" className={classes.text} value={"JohnDo3"} variant={variant} disabled={isDisabled}/>

                <tbody>
                    {
                        username.map( (getUser) => (
                            <InputLabel>test</InputLabel>
                        ))
                    }
                </tbody>
            
            </Container>
        </React.Fragment>

        // <>
        // <Box className={classes.all}>
        //     <Box className={classes.image}
        //         component="img"
        //         sx={{
        //         height: 200,
        //         width: 200,
        //         }}
        //         alt="profile picture"
        //         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6I0GgGO4yeT2WwnfBccOqcBhAunYjp_QSSDblnI&s"
        //     />
        //     <Box className={classes.container}>
        //         <Box className={classes.labelbox}>
        //             {/* <InputLabel className={classes.title}>Username:</InputLabel>
        //             <InputLabel className={classes.title}>First Name:</InputLabel>
        //             <InputLabel className={classes.title}>Last Name:</InputLabel>
        //             <InputLabel className={classes.title}>Email:</InputLabel>
        //             <InputLabel className={classes.title}>Password:</InputLabel> */}
        //         </Box>
        //         <Box className={classes.textbox}>

        //             {
        //                 username.map( (getUser) => (
        //                     // <TextField id="tf" size="small" className={classes.text} value={getUser.username} variant={variant} disabled={isDisabled}/>
        //                     <InputLabel>Hello</InputLabel>
        //                 )

        //                 )
        //             }

        //             {/* <TextField id="tf" size="small" className={classes.text} value={"JohnDo3"} variant={variant} disabled={isDisabled}/>
        //             <TextField id="tf" size="small" className={classes.text} value="John" variant={variant} disabled={isDisabled}/>
        //             <TextField id="tf" size="small" className={classes.text} label="Doe" variant={variant} disabled={isDisabled}/>
        //             <TextField id="tf" size="small" className={classes.text} label="johndoe@mail.com" variant={variant} disabled={isDisabled}/>
        //             <TextField id="tf" size="small" className={classes.text} label="***************" variant={variant} disabled={isDisabled}/> */}
        //         </Box>
        //     </Box>
        // </Box>
        // <Button className={classes.button} variant="edit" onClick={() => {
        //     setIsDisabled(false);
        //     variantChange();
        // }}>Edit</Button>
        // <Button id="button" onClick={() => setIsDisabled(true)} variant="edit" className={classes.button}>Save</Button>
        // </>
    );
}

export default User;