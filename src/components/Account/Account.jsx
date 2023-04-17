import React from "react";

import { CssBaseline, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import User from "./User/User";

const Account = () => {
    return(
        <>
            <CssBaseline/>
            <Header/>
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