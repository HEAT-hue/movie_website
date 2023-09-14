// jshint eversion:6
import { Outlet } from "react-router-dom"
import { useState } from "react";
import { AsideNavigation } from "../components/global";

export const UserLayout: React.FC = () => {

    // Handle the state of the aside navigation on mobile
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <> {/* Side Navigation */}
            <div className={`fixed inset-y-0 lg:w-[14rem] w-[271px] ${!isNavOpen && "-left-full"} lg:left-0 z-[100]`} >
                <AsideNavigation closeNav={() => setIsNavOpen(false)} />
            </div >

            {/* Render Outlet, Each page */}
            <div className="lg:ml-[14rem]" onClick={() => setIsNavOpen(false)}>
                <Outlet />
            </div >
        </>
    )
}