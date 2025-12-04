// Sidebar.jsx
import React from 'react';
import SidebarIcon from "../content/Sidebar.svg";

export const Sidebar = () => {
    return(
 
    <aside className= "h-screen w-64 bg-white boarder-r border-gray-200 flex-col py-6 px-4">
        <div className='mb-10 flex items-center gap-3'>
            <img 
            src={SidebarIcon} alt='Sidebar Icon'
            className='w-10 h-10 object-contain'
            />
            <h1 className='text-xl font-semibold text-gray-800'>Menue</h1>
        </div>

        <nav className='flex flex-col gap-4'>
            <button className='text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg px-3 py-2 text-left'>
                Overview
            </button>
            <button className='text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg px-3 py-2 text-left'>
           Chart
            </button>
            <button className='text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg px-3 py-2 text-left'>
          Transactions
            </button>
            <button className='text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg px-3 py-2 text-left'>
          Wallet
            </button>
            <button className='text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg px-3 py-2 text-left'>
          Mail Box
            </button>
            <button className='text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg px-3 py-2 text-left'>
          Settings
            </button>
            <button className='text-gray-700 hover:text-black hover:bg-gray-100 rounded-lg px-3 py-2 text-left'>
          Logout
            </button>
        </nav>
    </aside>

    
  );
}
export default Sidebar;

