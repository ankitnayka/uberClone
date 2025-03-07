import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = "http://localhost:4000/maps/";

export const mapsApi = createApi({
  reducerPath: 'mapsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    getSuggestions: builder.query({
      query: (input) => ({
        url: "get-suggestion",
        method: "GET",
        params:  {input}
      }),
    }),
  }),
});

export const { useGetSuggestionsQuery } = mapsApi;