import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem, Grid, Typography} from '@material-ui/core';
import { getPlacesData } from '../../../api';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import '../Content.css';
import axios from 'axios'; //used for data transferring

import useStyles from './styles';

const Generator = () => {

  const classes = useStyles();

    const [trips, setTrips] = useState([]);
    const [city, setCity] = useState('eauclaire');
    const [bounds, setBounds] = useState('');
    const [days, setDays] = useState('1');

    const cityLocations = [
        { name: 'eauclaire', nelat: '44.877575', nelng: '-91.438608', swlat: '44.762017', swlng: '-91.573509'},
        { name: 'madison', nelat: '43.119435', nelng: '-89.285650', swlat: '43.004792', swlng: '-89.542727'},
        { name: 'milwaukee', nelat: '43.132368', nelng: '-87.904997', swlat: '42.964741', swlng: '-88.024994'},
        { name: 'minocqua', nelat: '45.894470', nelng: '-89.617797', swlat: '45.854089', swlng: '-89.753569'},
        { name: 'greenbay', nelat: '44.550264', nelng: '-87.885520', swlat: '44.477802', swlng: '-88.132498'},
    ]

    const generateTrips = async (swlat, swlng, nelat, nelng, count) => {
      let hotels = await getPlacesData('hotels', swlat, swlng, nelat, nelng);
      let attractions = await getPlacesData('attractions', swlat, swlng, nelat, nelng);
      let restaurants = await getPlacesData('restaurants', swlat, swlng, nelat, nelng);

      console.log(hotels);
      console.log(attractions);
      console.log(restaurants);

      const filterAds = (data) => {
        return data.filter(place => !place.ad_position);
      };

      const filteredHotels = filterAds(hotels);
      const filteredAttractions = filterAds(attractions);
      const filteredRestaurants = filterAds(restaurants);
  
      console.log(filteredHotels);
      console.log(filteredAttractions);
      console.log(filteredRestaurants);
      
      
      const randomHotel = getRandomElement(filteredHotels);
  
      const trips = [];
      for (let i = 0; i < count; i++) {
        const days = [];
        days.push(getRandomElement(filteredAttractions));
        days.push(getRandomElement(filteredRestaurants));
        days.push(getRandomElement(filteredAttractions));
        days.push(getRandomElement(filteredRestaurants));
        days.push(randomHotel);
        trips.push(days);
        console.log(days);
        console.log(trips);
      }
      return trips;
  }

  function getRandomElement(arr) {
    const randIndex = Math.floor(Math.random() * arr.length );
    const randomElement = arr[randIndex];
    return randomElement;
  }

  const saveTrips = () => {
    const tripsJson = JSON.stringify(trips);
    console.log('its from generator.jsx');
    //console.log(tripsJson);
    axios.post('http://localhost:3306/itinerary', {tripsJson}) //sends the data in tripsJson from that link (we created that link)
      .then((res) => {
        console.log('success', res.data);
        console.log('printign in success');
      })
      .catch((error) => {
        console.error('error', error);
        console.log('printign in error');
      });
    return tripsJson; 
  };


    const handleGenerateTrips = async () => {
      if (bounds && days) {
        try {
          const data = await generateTrips(bounds.swlat, bounds.swlng, bounds.nelat, bounds.nelng, days);
          setTrips(data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    

  return (
    <div className ='body'>
      <div>
      <h2>Let Us Plan Your Trip For You!</h2>
      
      <FormControl className={classes.formControl}>
        <InputLabel>City</InputLabel>
        <Select value={city} onChange={(e) => {
            console.log(e);
            const selectedCity = cityLocations.find((city) => city.name === e.target.value);
            setCity(e.target.value);
            setBounds({
                nelat: selectedCity.nelat, 
                nelng: selectedCity.nelng, 
                swlat: selectedCity.swlat, 
                swlng: selectedCity.swlng});
                
                }}>

            <MenuItem value="eauclaire">Eau Claire</MenuItem>
            <MenuItem value="madison">Madison</MenuItem>
            <MenuItem value="milwaukee">Milwaukee</MenuItem>
            <MenuItem value="minocqua">Minocqua</MenuItem>
            <MenuItem value="greenbay">Green Bay</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="days-label">Number of Days</InputLabel>
        <Select value={days} onChange={(e) => {setDays(e.target.value)}}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
        </Select>
      </FormControl>
      <Button className={classes.buttons} variant="contained" color="primary" style={{backgroundColor: 'green'}} onClick={handleGenerateTrips}>Generate Trip</Button>
      <Button className={classes.buttons} variant="contained" color="primary" style={{backgroundColor: 'green'}}onClick={saveTrips}>Save Trip</Button>
      <Grid container spacing={3} justifyContent='center'>
  {trips &&
    trips.map((trip, i) => (
      <Grid item xs={12} md={4} key={`trip-${i}`}>
        <Typography variant="h5" align="center" gutterBottom> Day {i+1} </Typography>
        {trip &&
          trip.map((place, j) => (
            place && place.name &&
              <PlaceDetails place={place} key={`place-${i}-${j}`} />
          ))
        }
      </Grid>
    ))
  }
</Grid>
</div>
    </div>
  );
};

export default Generator;