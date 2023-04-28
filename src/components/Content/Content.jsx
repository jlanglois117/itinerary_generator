import React, { useState, useEffect } from 'react';
import List from './List/List';
import PlaceDetails from './PlaceDetails/PlaceDetails';
import './Content.css'
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from '../../api';


function Content(){
  const [places, setPlaces] = useState([]);
  const [bounds, setBounds] = useState('eauclaire');
  const [type, setType] = useState('restaurants');


  useEffect(() => {
    
      if (bounds) {
        getPlacesData(type, bounds.swlat, bounds.swlng, bounds.nelat, bounds.nelng)
          .then((data) => {
            console.log(data);
            setPlaces(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }, [type, bounds]);
    
    return (
        <div class = 'body'>
         <Grid container spacing={3} style={{ width: '100%'}} alignItems='center' justifyContent='center'>
                <Grid item xs={12} md={12} className='list-container'>
                  <List
                    places={places}
                    setBounds={setBounds}
                    type={type}
                    setType={setType}

                  />  
                </Grid>
            </Grid>
        </div>
    );
}

export default Content;