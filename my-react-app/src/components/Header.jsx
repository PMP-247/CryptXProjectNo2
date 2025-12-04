import React from "react";
import HeaderIcon from "../content/Header.svg";

export const Header = () => {
    return(
        <header className="w-[calc(100%-16rem)] h-20 bg-white border-gray-200 flex items-center justify-between px-6 top-0 left-64 z-10">
            <div className="flex items-center gap-3">
                <img src={HeaderIcon} alt="Header Item"
                className="w-10- h-10 object-contain"/> 
               
            </div>
            
        </header>
    );
}
export default Header;