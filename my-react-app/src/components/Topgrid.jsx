import React from "react";
import Card1Icon from "../content/Card1.svg";
import Card2Icon from "../content/Card2.svg";
import Card3Icon from "../content/Card3.svg";
import Card4Icon from "../content/Card4.svg";

export const Topgrid = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full">
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow p-2 flex items-center justify-center">
      <img src={Card1Icon} alt="Card Item 1" className="w-full h-full object-contain max-h-20" />
    </div>
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow p-2 flex items-center justify-center">
      <img src={Card2Icon} alt="Card Item 2" className="w-full h-full object-contain max-h-20" />
    </div>
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow p-2 flex items-center justify-center">
      <img src={Card3Icon} alt="Card Item 3" className="w-full h-full object-contain max-h-20" />
    </div>
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow p-2 flex items-center justify-center">
      <img src={Card4Icon} alt="Card Item 4" className="w-full h-full object-contain max-h-20" />
    </div>
  </div>
  );
}
export default Topgrid;
