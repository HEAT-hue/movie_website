// jshint esversion:6
import HeroImg from "../assets/home/Hero.png"
import MovieBoxIcon from "../assets/home/MovieBoxIcon.svg"
import MenuIcon from "../assets/home/Menu.svg"
import IMDBIcon from "../assets/home/imdb.svg"
import fruitIcon from "../assets/home/fruit.svg"
import VideoPlayicon from "../assets/home/Play.svg"
import { SearchBar } from "../components/home"
import { useState } from "react"


export const HomePage: React.FC = () => {

    const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined)

    const headerBackgroundStyle = {
        background: "no-repeat center center/cover",
        backgroundImage: `url(${HeroImg})`,
    }

    return (
        <>
            <header style={headerBackgroundStyle} className={`h-80 min-h-[550px] text-white py-4 px-4 sm:px-[2.5rem] lg:px-[5rem]`}>
                {/* Navigation */}
                <nav className="flex items-center justify-between">
                    {/* Brand */}
                    <div className="flex items-center gap-x-2">
                        <img src={MovieBoxIcon} className="w-[40px] h-[40px]" alt="Movie icon" />
                        <h3 className="font-sans font-bold">MovieBox</h3>
                    </div>

                    {/* Search Icon - desktop */}
                    <div className="hidden sm:block">
                        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                    </div>

                    {/* Sign in */}
                    <div className="flex items-center gap-x-3">
                        <p className="font-bold">Sign in</p>
                        <img className="w-[25px] h-[30px]" src={MenuIcon} alt="menu" />
                    </div>
                </nav>

                {/* Search Icon - mobile */}
                <div className="mt-[20px] sm:hidden">
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </div>

                {/* HERO Info */}
                <div className="mt-[70px] flex flex-col gap-y-4">
                    <h1 className="text-4xl font-extrabold">John Wick 3: <br /> Parabellum</h1>

                    {/* Rating */}
                    <div className="flex items-center gap-x-3">
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

                    {/* Movie Info */}
                    <p className="w-[302px]">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>

                    {/* Watch Trailer */}
                    <button className="w-max flex gap-x-2 py-3 px-4 rounded-md bg-brandColor">
                        <img src={VideoPlayicon} alt="watch" />
                        <span className="uppercase font-bold text-sm">watch trailer</span>
                    </button>
                </div>
            </header>
        </>
    )
}