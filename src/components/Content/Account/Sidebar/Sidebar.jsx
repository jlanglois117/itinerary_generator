import React from "react";

import { Button, Box } from "@material-ui/core";

import useStyles from './styles';

const Sidebar = () => {
    const classes = useStyles();

    return(
        <>
        <Box className={classes.container}>
            <Button variant="home" className={classes.button}>Account Information</Button>
            <Button variant="home" className={classes.button}>Favorites</Button>
        </Box>
        </>
    );
}

export default Sidebar;