import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/';


export const getPlacesData = async (type, swlat, swlng, nelat, nelng) => {
    try {
        const { data: { data }} = await axios.get(`${URL}${type}/list-in-boundary`, {
            params: {
                bl_latitude: swlat,
                tr_latitude: nelat,
                bl_longitude: swlng,
                tr_longitude: nelng,
                
              },
              headers: {
                'X-RapidAPI-Key': 'KEY HERE',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
            });

        return data;

    } catch (error) {
        console.log(error);
    }
};
