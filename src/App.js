import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <List /> 
        </>
        
    );
}

export default App;