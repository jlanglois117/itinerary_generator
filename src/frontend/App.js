import React, { useState } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Account from './components/Content/Account/Account'
import PlaceDetails from './components/Content/PlaceDetails/PlaceDetails';
import LoginContent from './components/Content/LoginContent';
import Itineraries from './components/Content/Account/Itineraries/itineraries'

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <BrowserRouter>
               <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />

                    <Route path ="/home" element={<Content />} />
                    <Route path ="/account" element ={<Account />} />
                    <Route path ="/login" element ={<LoginContent />} />
                    <Route path ="/itineraries" element ={<Itineraries />} />

                </Routes>
            </BrowserRouter>
            <Footer />
        </>
        
    );
}

export default App;