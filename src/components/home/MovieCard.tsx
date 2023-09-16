// jshint esversion:6
import { getUTCTime } from "../../utils";
import IMDBIcon from "../../assets/home/imdb.svg";
import fruitIcon from "../../assets/home/fruit.svg";
import { FeaturedMovieType } from "../../data/home";

const baseImageUrl = "https://image.tmdb.org/t/p/w342";

type MovieCardType = {
    data: FeaturedMovieType
}

export const MovieCard: React.FC<MovieCardType> = ({data}) => {

    const { year, month, day } = getUTCTime(data.release_date)

    if (!data.poster_path) {
        return null;
    }

    return (
        <>
            <div
                data-testid="movie-card"
                className="w-[250px]">

                {/* Movie image */}
                <img data-testid="movie-poster" className="w-full h-[370px]" src={`${baseImageUrl}/${data.poster_path}`} alt={`${data.title ?? "movie"} image`} />

                {/* Movie info */}
                <div className="mt-1">
                    {/* Movie date */}
                    <p data-testid="movie-release-date" className="text-sm text-gray-400 font-bold">{`${month}, ${day} ${year}`}</p>

                    {/* Movie title */}
                    <p data-testid="movie-title" className="font-bold text-2xl">{data.title}</p>

                    {/* Movie Rating */}
                    <div className="flex items-center justify-between gap-x-3 mt-1">
                        {/* IMDB */}
                        <div className="flex items-center gap-x-2">
                            <img className="w-[35px] h-[17px]" src={IMDBIcon} alt="imdb" />
                            <span className="font-light text-sm">86.0/100</span>
                        </div>

                        {/* Watched */}
                        <div className="flex items-center gap-x-2">
                            <img className="w-[35px] h-[17px]" src={fruitIcon} alt="fruit" />
                            <span className="font-light text-sm">97%</span>
                        </div>
                    </div>

                    {/* Genre */}
                    <p className="font-bold text-gray-400 mt-2 text-xs">Action, Adventure</p>
                </div>
            </div>
        </>
    )
}