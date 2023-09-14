import { emptySplitApi } from "..";
import { GetMoviesResponse } from "../../../data/home";

export const dashboardApi = emptySplitApi.enhanceEndpoints({ addTagTypes: ['AwaitingActions'] }).injectEndpoints({
    // Define your endpoints to the server
    // addTagTypes: 
    endpoints: (builder) => ({
        // Get user awaiting actions
        getMovies: builder.query<GetMoviesResponse, void>({
            query: () => ({ url: "discover/movie" }),

        })
    })
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery } = dashboardApi