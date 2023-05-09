import '../../Content.css';
import React, { useEffect , useState} from "react";
import Sidebar from "../Sidebar/Sidebar";
import PlaceDetails from '../../PlaceDetails/PlaceDetails';
import axios from 'axios';
import {Grid, Typography} from '@material-ui/core';

const Itineraries = () => {
    const [itineraryData, setItineraryData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3306/itinerary')
            .then(response => {
                try{
                    const parsedData = JSON.parse(response.data);
                    //console.log('from axios');
                    //console.log(parsedData);
                    if(Array.isArray(parsedData)){
                        setItineraryData(parsedData);
                        console.log('itinerary data var');
                        //console.log(setItineraryData(parsedData));
                        console.log(itineraryData);
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
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12} md={2}>
                    <Sidebar/>
                </Grid>
                <div className= 'saved'>
                <h2>Saved Itineraries</h2>
                {itineraryData &&
                    itineraryData.map((itinerary, i) => (
                        <Grid item xs={12} md={10} key={`itinerary-${i}`}>
                            <Typography variant="h5" align="center" gutterBottom>Day {i+1}</Typography>
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
                {/* {itineraryData &&
                    itineraryData.map((itinerary, i) => (
                        <Grid item xs={12} md={10} key={`itinerary-${i}`}>
                            <Typography variant="h5" align="center" gutterBottom>Day {i+1}</Typography>
                            {itinerary &&
                                itinerary.map((place, j) => (
                                    place && place.name &&
                                        <PlaceDetails place={place} key={`place-${i}-${j}`} />
                                ))
                            }
                        </Grid>
                    ))
                } */}
            </Grid>
        </div>
    )
}

export default Itineraries;