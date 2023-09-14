// jshint esversion:6
import { getUTCTime } from "../../utils";
import IMDBIcon from "../../assets/home/imdb.svg";
import fruitIcon from "../../assets/home/fruit.svg";

const data = {
    "adult": false,
    "backdrop_path": "/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg",
    "genre_ids": [
        35,
        12,
        14
    ],
    "id": 346698,
    "original_language": "en",
    "original_title": "Barbie",
    "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    "popularity": 3661.8,
    "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    "release_date": "2023-07-19",
    "title": "Barbie",
    "video": false,
    "vote_average": 7.3,
    "vote_count": 4286
}

const baseImageUrl = "https://image.tmdb.org/t/p/w342";

export const MovieCard: React.FC = () => {

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