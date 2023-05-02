import React, { useState } from 'react';
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select }  from '@material-ui/core';

import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ( { places, setBounds, type, setType, rating, setRating, price, setPrice }) => {
    const classes = useStyles();
    const [city, setCity] = useState('eauclaire');
    
    
    const cityLocations = [
        { name: 'eauclaire', nelat: '44.877575', nelng: '-91.438608', swlat: '44.762017', swlng: '-91.573509'},
        { name: 'madison', nelat: '43.119435', nelng: '-89.285650', swlat: '43.004792', swlng: '-89.542727'},
        { name: 'milwaukee', nelat: '43.132368', nelng: '-87.904997', swlat: '42.964741', swlng: '-88.024994'},
        { name: 'minocqua', nelat: '45.894470', nelng: '-89.617797', swlat: '45.854089', swlng: '-89.753569'},
        { name: 'greenbay', nelat: '44.550264', nelng: '-87.885520', swlat: '44.477802', swlng: '-88.132498'},
    ]


    return (
        <div>
            <Typography variant = "h4">
                Plan Your Trip Now
            </Typography>
            <FormControl className = {classes.formControl}>
                <InputLabel>City</InputLabel>
                <Select value = {city} onChange = {(e) => {
                    console.log(e);
                    const selectedCity = cityLocations.find((city) => city.name === e.target.value);
                    setCity(e.target.value);
                    setBounds({
                        nelat: selectedCity.nelat, 
                        nelng: selectedCity.nelng, 
                        swlat: selectedCity.swlat, 
                        swlng: selectedCity.swlng});
                        
                        }}>

                    <MenuItem value = "eauclaire">Eau Claire</MenuItem>
                    <MenuItem value = "madison">Madison</MenuItem>
                    <MenuItem value = "milwaukee">Milwaukee</MenuItem>
                    <MenuItem value = "minocqua">Minocqua</MenuItem>
                    <MenuItem value = "greenbay">Green Bay</MenuItem>
                </Select>
            </FormControl>
            <FormControl className = {classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value = {type} onChange = {(e) => setType(e.target.value)}>
                    <MenuItem value = "restaurants">Restaurants</MenuItem>
                    <MenuItem value = "hotels">Hotels</MenuItem>
                    <MenuItem value = "attractions">Attractions</MenuItem>
                </Select>
            </FormControl>
            <FormControl className = {classes.formControl} >
                <InputLabel>Rating</InputLabel>
                <Select value = {rating} onChange = {(e) => setRating(e.target.value)}>
                    <MenuItem value = {1}>1+</MenuItem>
                    <MenuItem value = {2}>2+</MenuItem>
                    <MenuItem value = {3}>3+</MenuItem>
                    <MenuItem value = {4}>4+</MenuItem>
                </Select>
            </FormControl>
            <FormControl className = {classes.formControl} >
                <InputLabel>Price</InputLabel>
                <Select value = {price} onChange = {(e) => setPrice(e.target.value)}>
                    <MenuItem value = {1}>1+</MenuItem>
                    <MenuItem value = {2}>2+</MenuItem>
                    <MenuItem value = {3}>3+</MenuItem>
                    <MenuItem value = {4}>4+</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing ={3} className={classes.list}>
                {places?.map((place, i) => (
                    <Grid item key ={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))} 
            </Grid>
        </div>
    );
}

export default List;