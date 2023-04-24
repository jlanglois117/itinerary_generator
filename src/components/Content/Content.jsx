import React, { useState, useEffect } from 'react';
import List from './List/List';
import PlaceDetails from './PlaceDetails/PlaceDetails';
import './Content.css'
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from '../../api';


const Content = () => {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [bounds, setBounds] = useState('eauclaire');

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
        <div class = 'body'>
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

        </div>
    );
}

export default Content;