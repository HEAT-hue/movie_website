import { emptySplitApi } from "..";
import { GetMoviesResponse } from "../../../data/home";

export const dashboardApi = emptySplitApi.injectEndpoints({
    // Define your endpoints to the server
    endpoints: (builder) => ({

        // Fetch movies
        getMovies: builder.query<GetMoviesResponse, void>({
            query: () => ({ url: "discover/movie" }),
        })
    })
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery } = dashboardApi