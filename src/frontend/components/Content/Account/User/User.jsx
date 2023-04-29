import React from "react";

import { InputLabel, Box, TextField, Button } from "@material-ui/core";

import useStyles from './styles';
import { useState, useEffect } from "react";

import { useJwt } from "react-jwt";
import axios from "axios";
//import { response } from "express";

const User = ({token}) => {
    const classes = useStyles();
    //editing
    const [editMode, setEditMode] = useState(false);
    // const [user, setUser] = useState("jan3do3");
    // const [user, setUser] = useState({}); //NEW

    const [userData, setUserData] = useState(null); //NEWNEW

    // const [firstName, setFirstName] = useState("Jane");
    // const [lastName, setLastName] = useState("Doe");
    // const [email, setEmail] = useState("janedoe@mail.com");
    // const [password, setPassword] = useState("**********");
    
    // const handleEditMode = () => {
    //     setEditMode(!editMode);
    // };
    // const handleSaveChanges = () => {
    //     setEditMode(false);
    // };
    // const handleUsernameChange = (event) => {
    //     setUser(event.target.value);
    // };
    // const handleFirstNameChange = (event) => {
    //     setFirstName(event.target.value);
    // };
    // const handleLastNameChange = (event) => {
    //     setLastName(event.target.value);
    // };
    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // };
    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    // };

    //data below

    // const [username, setUsername] = useState([]);
   
    useEffect(() => {
        const decodedToken = useJwt.decode(token);
        if(decodedToken) {
            axios
                .get('http://localhost:3000/user/${decodedToken.id}')
                .then((response) => {
                    setUserData(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        //fetchUserData(); //NEW

        // const getUsername = async () => {
        //     const res = await fetch('http://localhost:3000/');
        //     const getData = await res.json();
        //     setUsername(getData);
        //     //console.log(getData);
        // }
        // getUsername();
    }, [token]);

    // const fetchUserData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:3000/user');
    //         const data = await response.json();
    //         setUser(data);
    //     }catch(error){
    //         console.error(error);
    //     }
    // };

    const handleEditClick = () => {
        setEditMode(!editMode);
    };

    // const handleSaveClick = async () => {
    //     try{
    //         const response = await fetch('http://localhost:3000/user', {
    //             method: 'PUT',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify(user),
    //         });
    //         const data = await response.json();
    //         setUser(data);
    //         setEditMode(false);
    //     }catch(error) {
    //         console.error(error);
    //     }
    // };

    // const handleChange = (event) => {
    //     const{name,value} = event.target;
    //     setUser((prevState) => ({...prevState, [name]: value}));
    // };

    return(
        <>
        <Box className={classes.all}>
            <Box className={classes.image}
                component="img"
                sx={{
                height: 200,
                width: 200,
                }}
                alt="profile picture"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6I0GgGO4yeT2WwnfBccOqcBhAunYjp_QSSDblnI&s"
            />
            <Box className={classes.container}>
                <Box className={classes.labelbox}>
                    <InputLabel className={classes.title}>Username:</InputLabel>
                    <InputLabel className={classes.title}>First Name:</InputLabel>
                    <InputLabel className={classes.title}>Last Name:</InputLabel>
                    <InputLabel className={classes.title}>Email:</InputLabel>
                    <InputLabel className={classes.title}>Password:</InputLabel>
                </Box>
                <Box className={classes.textbox}>
                    
                    
                    {/* <TextField className={classes.text} label="Username" name="username" value={user.username} disabled={!editMode} onChange={handleChange}/>
                    <TextField className={classes.text} label="First Name" name="fName" value={user.fname} disabled={!editMode} onChange={handleChange}/>
                    <TextField className={classes.text} label="Last Name" name="lName" value={user.lname} disabled={!editMode} onChange={handleChange}/>
                    <TextField className={classes.text} label="Email" name="email" value={user.email} disabled={!editMode} onChange={handleChange}/>
                    <TextField className={classes.text} label="Password" name="password" value={user.password} disabled={!editMode} onChange={handleChange}/> */}
                    
                    {/* <TextField className={classes.text} id="username" label="Username" value={user} disabled={!editMode} onChange={handleUsernameChange}/>
                    <TextField className={classes.text} id="firstName" label="First Name" value={firstName} disabled={!editMode} onChange={handleFirstNameChange}/>
                    <TextField className={classes.text} id="lastName" label="Last Name" value={lastName} disabled={!editMode} onChange={handleLastNameChange}/>
                    <TextField className={classes.text} id="email" label="Email" value={email} disabled={!editMode} onChange={handleEmailChange}/>
                    <TextField className={classes.text} id="password" label="Password" value={password} disabled={!editMode} onChange={handlePasswordChange}/> */}
                </Box>
            </Box>
        </Box>
        {/* {editMode ? (
            <Button className={classes.button} variant="contained" color="primary" onClick={handleSaveClick}>Save</Button>
        ) : (
            <Button className={classes.button} variant="contained" color="primary" onClick={handleEditClick}>Edit</Button>
        ) } */}

        {/* <Button className={classes.button} variant="contained" color="primary" onClick={editMode ? handleSaveClick : handleEditClick}>{editMode ? "Save" : "Edit"}</Button> */}

        {/* <Button className={classes.button} variant="contained" color="primary" onClick={editMode ? handleSaveClick : handleEditClick}>{editMode ? "Save" : "Edit"}</Button> */}
        </>
    );
}

export default User;