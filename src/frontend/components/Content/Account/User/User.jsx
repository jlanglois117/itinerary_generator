import React from "react";

import { InputLabel, Box, TextField, Button } from "@material-ui/core";

import useStyles from './styles';

const User = () => {
    const classes = useStyles();

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
                    <TextField size="small" className={classes.text} label="JohnDo3" variant="filled"/>
                    <TextField size="small" className={classes.text} label="John" variant="filled"/>
                    <TextField size="small" className={classes.text} label="Doe" variant="filled"/>
                    <TextField size="small" className={classes.text} label="johndoe@mail.com" variant="filled"/>
                    <TextField size="small" className={classes.text} label="***************" variant="filled"/>
                </Box>
            </Box>
        </Box>
        <Button variant="edit" className={classes.button}>Edit</Button>
        </>
    );
}

export default User;