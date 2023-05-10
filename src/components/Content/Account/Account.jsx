import React from "react";

import { Grid } from "@material-ui/core";

import Sidebar from "./Sidebar/Sidebar";
import User from "./User/User";
import Itineraries from"./Itineraries/Itineraries";

const Account = () => {
    return(
        <>
            
            <Grid container spacing ={3} style={{width:'100%'}}>
                <Grid item xs={12} md={2}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={12} md={10}>
                    <User/>
                    
                </Grid>
            </Grid>
        </>
    );
}

export default Account;