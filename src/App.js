import React from 'react';
import { CssBaseline } from '@material-ui/core';
import './App.css';

import Header from './components/Header/Header';
import List from './components/List/List';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <List /> 
            <Content />
            <Footer />
        </>
        
    );
}

export default App;