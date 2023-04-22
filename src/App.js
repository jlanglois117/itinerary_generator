import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Account from './components/Content/Account/Account'
import List from './components/List/List';
import { getPlacesData } from './api';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import LoginContent from './components/Content/LoginContent';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Content/Login/Login';


const App = () => {
    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);

    const [bounds, setBounds] = useState(null);

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('1');
    const [price, setPrice] = useState('1');

    useEffect(() => {
        const filteredPlaces = places.filter((place) => 
        place.rating > rating && place.price_level > price);

        setFilteredPlaces(filteredPlaces);
    }, [rating, price]);
    

    useEffect(() => {
        if (bounds) {
          getPlacesData(type, bounds.swlat, bounds.swlng, bounds.nelat, bounds.nelng)
            .then((data) => {
              console.log(data);
              setPlaces(data);
              setFilteredPlaces([])
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }, [type, bounds]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%'}} alignItems='center' justifyContent='center'>
                <Grid item xs={12} md={5}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places}
                        setBounds={setBounds}
                        type={type}
                        setType={setType}
                        rating={rating}
                        setRating={setRating}
                        price={price}
                        setPrice={setPrice}
                    />
                </Grid>
            </Grid>
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