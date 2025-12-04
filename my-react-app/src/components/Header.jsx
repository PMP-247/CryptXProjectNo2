import React from "react";
import HeaderIcon from "../content/Header.svg";

export const Header = () => {
    return(
        <header className="w-full h-20 bg-white boarder-gray-200 flex items-center justify-between px6">
            <div className="flex items-center gap-3">
                <img src="{HeaderIcon}" alt="Header Item"
                className="w-1- h-10 object-contain"
                /> 
                <h1 className="text-xl font-semibold">The top of the Page</h1>
            </div>
            
        </header>
    );
}
export default Header;