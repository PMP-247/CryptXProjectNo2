import React from "react";
import HeaderIcon from "../content/Header.svg";

export const Header = () => {
  return (
    <header className="]fixed top-0 right-64 h-20 w-[calc(100%-16rem) bg-white border-gray-200 border-b flex items-center justify-between  px-6 z-10">
      <div className="flex items-center gap-3">
        <img
          src={HeaderIcon}
          alt="Header Item"
          className="w-10- h-10 object-contain"
        />
      </div>
    </header>
  );
};
export default Header;
