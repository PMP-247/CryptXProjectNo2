import React from 'react';
import LiveMarketIcon from "../content/LiveMarket.svg";

export const Livemarket = () => {
   
    return(<div className="flex items-center justify-center w-full h-full">
        <img 
          src={LiveMarketIcon}
          alt="Live Market"
          className="w-full h-full object-contain"
        />
      </div>
    );
 }

 export default Livemarket;