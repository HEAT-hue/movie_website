// jshint esversion:6
import { MovieCard } from "."
import { useGetMoviesHook } from "../../hooks/home"
import { FeaturedMovieType } from "../../data/home"

export const FeaturedMovies: React.FC = () => {
    const { data: FeaturedMoviesData, isLoading: isFeaturedMoviesLoading, isError: isFeaturedMoviesError } = useGetMoviesHook()

    if (isFeaturedMoviesError) {
        return (
            <p>An error occurred when fetching your movies</p>
        )
    }

    return (
        <>
            <section className="py-4 px-4 sm:px-[2.5rem] lg:px-[5rem]">
                <h3 className="text-lg font-bold">Featured Movie</h3>

                <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(0,_250px))] justify-center lg:justify-between place-content-center gap-y-7 gap-x-5 md:gap-x-[3rem]">
                    {
                        FeaturedMoviesData?.results.slice(0, 10).map((data: FeaturedMovieType, index: number) => {
                            return (
                                <MovieCard key={index} data={data} />
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}