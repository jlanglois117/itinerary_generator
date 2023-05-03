import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async (type, swlat, swlng, nelat, nelng) => {
    try {
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: swlat,
                tr_latitude: nelat,
                bl_longitude: swlng,
                tr_longitude: nelng,
                
              },
              headers: {
                'X-RapidAPI-Key': 'dd482164cbmsh2f823dacbaf0704p137b52jsn1271c8a5752f',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
            });

        return data;

    } catch (error) {
        console.log(error);
    }
}