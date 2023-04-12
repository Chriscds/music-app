import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const spotifyCoreApi = createApi({
        reducerPath: 'spotifyCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://spotify23.p.rapidapi.com/',
            prepareHeaders: (headers) => {
               headers.set('X-RapidAPI-Key', ''); 

               return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () => 'search/?q=Charts&type=multi&offset=0&limit=10&numberOfTopResults=5' }),
        })
    });

    export const {
        useGetTopChartsQuery,
    } = spotifyCoreApi;