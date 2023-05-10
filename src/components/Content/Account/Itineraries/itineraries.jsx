import '../../Content.css';
import React, { useEffect , useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import PlaceDetails from '../../PlaceDetails/PlaceDetails';
import axios from 'axios';
import {Grid, Typography} from '@material-ui/core';
import useStyles from './styles';

const Itineraries = () => {
    const [itineraryData, setItineraryData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios.get('http://localhost:3306/itinerary')
            .then(response => {
                try{
                    console.log('Response:', response.data);
                    //const trimmedData = JSON.stringify(response.data).trim(); // Convert to string and trim
                    //const trimmedData = response.data.trim(); // Trim the JSON string
                    //const parsedData = JSON.parse(trimmedData);
                    const parsedData = JSON.parse(response.data); //OG
                    //console.log('from axios');
                    //console.log(parsedData);
                    //console.log('Parsed data:', parsedData); // Check the value of parsedData
                    //setItineraryData(response.data.slice(0, 3));
                    //setItineraryData(parsedData.slice(0, 3)); // Update the state with the first three rows
                    //setItineraryData(parsedData);
                    if(Array.isArray(parsedData)){ //OG
                        console.log('Parsed data:', parsedData); // Check the value of parsedData
                        setItineraryData(parsedData); //OG
                        console.log('itineraryData:', itineraryData); //OG
                        // console.log('itinerary data var'); //OG
                        // console.log(itineraryData); //OG
                    }else{ //OG
                        console.log('data is not an array'); //OG
                    }
                }catch(error){
                    console.log('error in parsing,', error);
                }
            })
            .catch(error => console.log('error in data retrieval,', error));
    }, []);

    //itineraryData check
    // useEffect(() => {
    //     console.log('THIS IS ITINERARY DATA:', itineraryData);
    // }, [itineraryData]);
    // console.log('Render cycle');


    return(
        <div>
            {/* originally container spacing 3 */}
            <Grid container spacing={1}> 
                <Grid item xs={12} md={2}>
                    <Sidebar/>
                </Grid>
                <div className= 'saved'>
                <h2>Saved Itineraries</h2>
                {itineraryData &&
                    itineraryData.map((itinerary, i) => (
                        <Grid item xs={12} md={10} key={`itinerary-${i}`}>
                            <Typography className={classes.day} variant="h5" align="center" gutterBottom>Day {i+1}</Typography>
                            {itinerary &&
                                itinerary.map((place, j) => (
                                    place && place.name &&
                                        <PlaceDetails place={place} key={`place-${i}-${j}`} />
                                ))
                            }
                        </Grid>
                    ))
                }
                </div>
            </Grid>
        </div>
    )
}

export default Itineraries;