// Import the RTK Query methods from react-specific endpoint
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define your base query function
const baseQuery = fetchBaseQuery({
    // Target URL
    baseUrl: "https://api.themoviedb.org/3/movie/",

    // A number in milliseconds that represents that maximum time a request can take before timing out.
    timeout: 20000,
})

// Export appSlice to make reducer available
export const emptySplitApi = createApi({
    // Unique key to mount service to the store
    reducerPath: "api",

    // Add the baseQuery function
    baseQuery,

    // Refetch when there is a network connection
    refetchOnReconnect: true,

    // Make use of query injections
    // Don't add your endpoints here, make use of injections i.e. code splitting
    // So as to reduce the initial bundle size of the code
    endpoints: () => ({})
})