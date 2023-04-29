import React from "react";

import { InputLabel, Box, TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import useStyles from './styles';
import { useState, useEffect } from "react";



const User = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    //editing
    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useState("jan3do3");
    const [firstName, setFirstName] = useState("Jane");
    const [lastName, setLastName] = useState("Doe");
    const [email, setEmail] = useState("janedoe@mail.com");
    const [password, setPassword] = useState("**********");
    
    const handleEditMode = () => {
        setEditMode(!editMode);
    };
    const handleSaveChanges = () => {
        setEditMode(false);
    };
    const handleUsernameChange = (event) => {
        setUser(event.target.value);
    };
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogout = () => {
        setUser({});
        setUsername("");
        setPassword("");
        localStorage.clear();
        navigate('/login')
      };

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

    // {
    //     username.map( (getUsername) => (
    //         <tr>{getUsername.username}</tr>
    //     )
        
    //     )
    // }

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
                    <TextField className={classes.text} id="username" label="Username" value={user} disabled={!editMode} onChange={handleUsernameChange}/>
                    <TextField className={classes.text} id="firstName" label="First Name" value={firstName} disabled={!editMode} onChange={handleFirstNameChange}/>
                    <TextField className={classes.text} id="lastName" label="Last Name" value={lastName} disabled={!editMode} onChange={handleLastNameChange}/>
                    <TextField className={classes.text} id="email" label="Email" value={email} disabled={!editMode} onChange={handleEmailChange}/>
                    <TextField className={classes.text} id="password" label="Password" value={password} disabled={!editMode} onChange={handlePasswordChange}/>
                </Box>
            </Box>
        </Box>
        <Button className={classes.button} variant="contained" color="primary" onClick={editMode ? handleSaveChanges : handleEditMode}>{editMode ? "Save" : "Edit"}</Button>
        <Button className={classes.button} variant="contained" color="primary" onClick={handleLogout}>Log Out</Button>
        </>
    );
}

export default User;