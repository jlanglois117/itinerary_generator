import '../../Content.css';
import React, { useEffect , useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import PlaceDetails from '../../PlaceDetails/PlaceDetails';
import axios from 'axios';
import {Grid, Typography} from '@material-ui/core';
import useStyles from './styles';

const Itineraries = () => {
    const [itineraryData, setItineraryData] = useState([]);
    const [itineraryDataTwo, setItineraryDataTwo] = useState([]);
    const [itineraryDataThree, setItineraryDataThree] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios.get('http://localhost:3306/itinerary/one')
            .then(response => {
                try{
                    console.log('Response:', response.data);
                    const parsedData = JSON.parse(response.data); 
                    if(Array.isArray(parsedData)){ 
                        console.log('Parsed data:', parsedData); 
                        setItineraryData(parsedData); 
                    }else{ 
                        console.log('data is not an array'); 
                    }
                }catch(error){
                    console.log('error in parsing,', error);
                }
            })
            .catch(error => console.log('error in data retrieval,', error));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3306/itinerary/two')
            .then(response => {
                try{
                    console.log('Response:', response.data);
                    const parsedData = JSON.parse(response.data); 
                    if(Array.isArray(parsedData)){ 
                        console.log('Parsed data:', parsedData);
                        setItineraryDataTwo(parsedData); 
                        }else{ 
                        console.log('data is not an array'); 
                    }
                }catch(error){
                    console.log('error in parsing,', error);
                }
            })
            .catch(error => console.log('error in data retrieval,', error));
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3306/itinerary/three')
            .then(response => {
                try{
                    console.log('Response:', response.data);
                    const parsedData = JSON.parse(response.data); 
                    if(Array.isArray(parsedData)){ 
                        console.log('Parsed data:', parsedData); 
                        setItineraryDataThree(parsedData); 
                        }else{ 
                        console.log('data is not an array'); 
                    }
                }catch(error){
                    console.log('error in parsing,', error);
                }
            })
            .catch(error => console.log('error in data retrieval,', error));
    }, []);

    return(
        <div className={classes.container}>
            <Grid item xs={12} md={2}>
                <Sidebar/>
            </Grid>
            <div className={classes.itineraries}>
                <h2 className={classes.title}>Saved Itineraries</h2>
                <div className={classes.columns}>
                    <div className={classes.first}>
                        <h2>Itinerary One</h2>
                        {itineraryData &&
                            itineraryData.map((itinerary, i) => (
                                <Grid className={classes.first} item xs={12} md={10} key={`itinerary-${i}`}>
                                    <Typography className={classes.day} variant="h5" align="center" gutterBottom>Day {i+1}</Typography>
                                    {itinerary &&
                                        itinerary.map((place, j) => (
                                            place && place.name && //OG
                                                <PlaceDetails place={place} key={`place-${i}-${j}`} /> //OG
                                            ))
                                    }
                                </Grid>
                            ))
                        }
                    </div>
                    <div className={classes.second}>
                        <h2>Itinerary Two</h2>
                        {itineraryDataTwo &&
                            itineraryDataTwo.map((itinerary, i) => (
                                <Grid className={classes.second} item xs={12} md={10} key={`itinerary-${i}`}>
                                    <Typography className={classes.day} variant="h5" align="center" gutterBottom>Day {i+1}</Typography>
                                    {itinerary &&
                                        itinerary.map((place, j) => (
                                            place && place.name && //OG
                                                <PlaceDetails place={place} key={`place-${i}-${j}`} /> //OG
                                            ))
                                    }
                                </Grid>
                            ))
                        }
                    </div>
                    <div className={classes.third}>
                        <h2>Itinerary Three</h2>
                        {itineraryDataThree &&
                            itineraryDataThree.map((itinerary, i) => (
                                <Grid className={classes.three} item xs={12} md={10} key={`itinerary-${i}`}>
                                    <Typography className={classes.day} variant="h5" align="center" gutterBottom>Day {i+1}</Typography>
                                    {itinerary &&
                                    itinerary.map((place, j) => (
                                        place && place.name && //OG
                                            <PlaceDetails place={place} key={`place-${i}-${j}`} /> //OG
                                        ))
                                    }
                                </Grid>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itineraries;