import axios from 'axios';

// OpenRouteService API Key
const apiKey = process.env.OPENROUTESERVICE_API;

/**
 * Convert Address to Coordinates (Geocoding API)
 */
export const getAddressCoordinate = async (address) => {
    const url = `https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf62488da69ddcafe244619e4b4032cda7dcb9&text=${encodeURIComponent(address)}`;

    try {
        const response = await axios.get(url);
        if (response.data.features.length > 0) {
            const location = response.data.features[0].geometry.coordinates;
            return {
                lng: location[0], // Longitude
                ltd: location[1]  // Latitude
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * Get Distance and Time Between Two Locations (Directions API)
 */
export const getDistanceTimee = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf62488da69ddcafe244619e4b4032cda7dcb9&start=${origin.lng},${origin.ltd}&end=${destination.lng},${destination.ltd}`;

    try {
        const response = await axios.get(url);
        if (response.data.routes.length > 0) {
            const route = response.data.routes[0].summary;
            return {
                distance: route.distance / 1000, // Convert meters to km
                duration: route.duration / 60   // Convert seconds to minutes
            };
        } else {
            throw new Error('No route found');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * Get Autocomplete Suggestions (Autocomplete API)
 */
export const getAutoCompleteSuggestionss = async (input) => {
    if (!input) {
        throw new Error('Query is required');
    }

    const url = `https://api.openrouteservice.org/geocode/autocomplete?api_key=5b3ce3597851110001cf62488da69ddcafe244619e4b4032cda7dcb9&text=${encodeURIComponent(input)}`;

    try {
        const response = await axios.get(url);
        if (response.data.features.length > 0) {
            return response.data.features.map(feature => feature.properties.label);
        } else {
            return [];
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

/**
 * Get Nearby Captains within a Radius
 */
export const getCaptainsInTheRadius = async (ltd, lng, radius) => {
    // Radius in km (OpenRouteService uses meters, MongoDB uses radians)
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[lng, ltd], radius / 6371] // Convert radius to radians
            }
        }
    });

    return captains;
};



// import axios from 'axios'


// export const  getAddressCoordinate = async (address) => {
//     const apiKey = process.env.GOOGLE_MAPS_API;
//     const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

//     try {
//         const response = await axios.get(url);
//         if (response.data.status === 'OK') {
//             const location = response.data.results[ 0 ].geometry.location;
//             return {
//                 ltd: location.lat,
//                 lng: location.lng
//             };
//         } else {
//             throw new Error('Unable to fetch coordinates');
//         }
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }

// export const  getDistanceTimee = async (origin, destination) => {
//     if (!origin || !destination) {
//         throw new Error('Origin and destination are required');
//     }

//     const apiKey = process.env.GOOGLE_MAPS_API;

//     const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

//     try {


//         const response = await axios.get(url);
//         if (response.data.status === 'OK') {

//             if (response.data.rows[ 0 ].elements[ 0 ].status === 'ZERO_RESULTS') {
//                 throw new Error('No routes found');
//             }

//             return response.data.rows[ 0 ].elements[ 0 ];
//         } else {
//             throw new Error('Unable to fetch distance and time');
//         }

//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// }

// export const  getAutoCompleteSuggestionss = async (input) => {
//     if (!input) {
//         throw new Error('query is required');
//     }

//     const apiKey = process.env.GOOGLE_MAPS_API;
//     const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

//     try {
//         const response = await axios.get(url);
//         if (response.data.status === 'OK') {
//             return response.data.predictions.map(prediction => prediction.description).filter(value => value);
//         } else {
//             throw new Error('Unable to fetch suggestions');
//         }
//     } catch (err) {
//         console.error(err);
//         throw err;
//     }
// }

// export const getCaptainsInTheRadius = async (ltd, lng, radius) => {

//     // radius in km


//     const captains = await captainModel.find({
//         location: {
//             $geoWithin: {
//                 $centerSphere: [ [ ltd, lng ], radius / 6371 ]
//             }
//         }
//     });

//     return captains;


// }