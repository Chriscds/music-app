import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '25f7238c8emsh59dc82dedf34fa2p12a7e8jsnfa7aeca4fb1a',
//       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://spotify23.p.rapidapi.com/search/?q=Charts&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    export const spotifyCoreApi = createApi({
        reducerPath: 'spotifyCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://spotify23.p.rapidapi.com/',
            prepareHeaders: () => {
               headers.set('X-RapidAPI-Key', '25f7238c8emsh59dc82dedf34fa2p12a7e8jsnfa7aeca4fb1a') 
            }
        })
    });