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
                'X-RapidAPI-Key': 'dd482164cbmsh2f823dacbaf0704p137b52jsn1271c8a5752f',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
            });

        return data;

    } catch (error) {
        console.log(error);
    }
};

    export const generateTrips = async (swlat, swlng, nelat, nelng, count) => {
    const hotels = await getPlacesData('hotels', swlat, swlng, nelat, nelng);
    const attractions = await getPlacesData('attractions', swlat, swlng, nelat, nelng);
    const restaurants = await getPlacesData('restaurants', swlat, swlng, nelat, nelng);

    console.log(hotels);
    console.log(attractions);
    console.log(restaurants);
    
    const randomHotel = getRandomElement(hotels);

    const trips = [];
    for (let i = 0; i < count; i++) {
    const days = [];
    days.push(getRandomElement(attractions));
    days.push(getRandomElement(restaurants));
    days.push(getRandomElement(attractions));
    days.push(getRandomElement(restaurants));
    days.push(randomHotel);
    trips.push(days);
    console.log(days);
    console.log(trips);
    }
    return trips;
}
  
//   function getRandomElement(arr) {
//     const randIndex = Math.floor(Math.random() * arr.length );
//     const randomElement = arr[randIndex];
//     return randomElement;
//   }

//   const handleGenerateTrips = async () => {
//     if (bounds && count) {
//       try {
//         const data = await generateTrips(bounds.swlat, bounds.swlng, bounds.nelat, bounds.nelng, count);
//         setPlaces(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };