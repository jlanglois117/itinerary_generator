import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Account from './components/Content/Account/Account'
//import List from './components/List/List';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import LoginContent from './components/Content/LoginContent';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Content/Login/Login';


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
                    
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
        
    );
}

export default App;