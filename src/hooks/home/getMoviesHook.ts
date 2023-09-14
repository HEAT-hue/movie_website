// jshint esversion:6
import { useGetMoviesQuery } from "../../app/services/home"

export const useGetMoviesHook = () => {

    const { data, isLoading, isFetching, isError, isSuccess } = useGetMoviesQuery(undefined, { refetchOnReconnect: true, refetchOnMountOrArgChange: true })

    return {
        data, isLoading, isFetching, isError, isSuccess
    }
}