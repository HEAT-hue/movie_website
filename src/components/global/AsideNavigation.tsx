// jshint esversion:6
import { NavLink } from "react-router-dom";

import { RxCross1 } from "react-icons/rx";
import MovieBoxIcon from "../../assets/home/MovieBoxIcon.svg"
import HomeIcon from "../../assets/movies/Home.svg";
import MoviesIcon from "../../assets/movies/MovieProjector.svg";
import TVSeriesIcon from "../../assets/movies/TVShow.svg";
import UpcomingMoviesIcon from "../../assets/movies/Calendar.svg";
import LogoutIcon from "../../assets/movies/Logout.svg";

type AsideNavigationProps = {
    closeNav: () => void
}

export const AsideNavigation: React.FC<AsideNavigationProps> = ({ closeNav }) => {
    return (
        <>
            <aside
                className={`w-full h-full bg-SideNav pt-[20px] relative font-CabinetGrotesk-Bold`}
                aria-label="Sidebar"
            // onClick={setNavBarToFalse}
            >
                {/* Navigation Logo and Close Icon */}
                <div className="flex justify-between items-center px-[15%]">
                    {/* Navigation logo */}
                    <NavLink to={"/home"}>
                        <div className="flex items-center gap-x-2 w-[120px] h-[60px]" onClick={closeNav}>
                            <div>
                                <img src={MovieBoxIcon} alt="logo" className="h-[50px] w-[50px]" />
                            </div>
                            <p className="font-bold text-[15px]">MovieBox</p>
                        </div>
                    </NavLink>

                    {/* Close icon */}
                    <div className="lg:hidden cursor-pointer" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        <RxCross1
                            size={20}
                            className="z-20 top-8 lg:hidden"
                            onClick={closeNav}
                        />
                    </div>
                </div>

                {/* NavLinks */}
                <ul className="font-medium transition duration-500 flex flex-col space-y-3 sm:space-y-2 mx-auto pt-5 h-[85vh] overflow-y-scroll">

                    {/* Home page */}
                    <li className={`ease-in-out transition duration-500 hover:bg-brandColor/10`}>
                        <NavLink
                            to="/"
                            onClick={closeNav}
                        >
                            {({ isActive }) => (
                                <div className={`flex py-[18px] pl-[14%] items-center sm:justify-start ease-in-out transition duration-500 ${isActive && "bg-brandColor/10 border-r-[3px] border-brandColor text-brandColor "}`}>
                                    <img src={isActive ? HomeIcon : HomeIcon} alt="home page" />
                                    <span className="pl-3">Home</span>
                                </div>
                            )}
                        </NavLink>
                    </li>

                    {/* Movies page */}
                    <li className={`ease-in-out transition duration-500 hover:bg-brandColor/10`}>
                        <NavLink
                            to="/movies"
                            onClick={closeNav}
                        >
                            {({ isActive }) => (
                                <div className={`flex py-[18px] pl-[14%] items-center sm:justify-start ease-in-out transition duration-500 ${isActive && "bg-brandColor/10 border-r-[3px] border-brandColor text-brandColor "}`}>
                                    <img src={isActive ? MoviesIcon : MoviesIcon} alt="Movies link" />
                                    <span className="pl-3">Movies</span>
                                </div>
                            )}
                        </NavLink>
                    </li>

                    {/* TV Series */}
                    <li className={`ease-in-out transition duration-500 hover:bg-brandColor/10`}>
                        <NavLink
                            to="/series"
                            onClick={closeNav}
                        >
                            {({ isActive }) => (
                                <div className={`flex py-[18px] pl-[14%] items-center sm:justify-start ease-in-out transition duration-500 ${isActive && "bg-brandColor/10 border-r-[3px] border-brandColor text-brandColor "}`}>
                                    <img src={isActive ? TVSeriesIcon : TVSeriesIcon} alt="TV link" />
                                    <span className="pl-3">TV Series</span>
                                </div>
                            )}
                        </NavLink>
                    </li>

                    {/* Upcoming */}
                    <li className={`ease-in-out transition duration-500 hover:bg-brandColor/10`}>
                        <NavLink
                            to="/series"
                            onClick={closeNav}
                        >
                            {({ isActive }) => (
                                <div className={`flex py-[18px] pl-[14%] items-center sm:justify-start ease-in-out transition duration-500 ${isActive && "bg-brandColor/10 border-r-[3px] border-brandColor text-brandColor "}`}>
                                    <img src={isActive ? UpcomingMoviesIcon : UpcomingMoviesIcon} alt="TV link" />
                                    <span className="pl-3">Upcoming Series</span>
                                </div>
                            )}
                        </NavLink>
                    </li>

                    {/* Movie Quiz */}
                    <li className="bg-brandColor/10 w-3/4 rounded-xl mx-auto p-3 py-5 flex flex-col items-center gap-y-2 border-[1px] border-brandColor">
                        <p className="text-sm font-sans">Play movie quizes and earnfree tickets</p>
                        <p className="text-xs font-sans font-normal">50k people are playing now</p>
                        <button className="py-1 px-3 bg-brandColor/20 text-brandColor rounded-full text-xs w-max">Start Playing</button>
                    </li>

                    {/* Logout */}
                    <li className={`ease-in-out transition duration-500 hover:bg-brandColor/10`}>
                        <NavLink
                            to="/series"
                            onClick={closeNav}
                        >
                            {({ isActive }) => (
                                <div className={`flex py-[18px] pl-[14%] items-center sm:justify-start ease-in-out transition duration-500 ${isActive && "bg-brandColor/10 border-r-[3px] border-brandColor text-brandColor "}`}>
                                    <img src={isActive ? LogoutIcon : LogoutIcon} alt="TV link" />
                                    <span className="pl-3">Logout</span>
                                </div>
                            )}
                        </NavLink>
                    </li>
                </ul>
            </aside>

        </>
    )
}