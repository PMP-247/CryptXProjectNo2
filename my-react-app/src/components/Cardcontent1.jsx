import React from 'react';
import Card1Icon from "../content/Card1.svg";

export const Cardcontent1 = () => {
    return(
        <div className='w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-6 
        flex flex-col md:flex-row items-start md:items-center gap-6 transition-all duration-300'>
            <div className='flex-shrink-0'>
                <img src="{Card1Icon}" alt="Card Icon"
                className='w-16 h-16 object-contain dark:invert-0' />
            </div>

            <div className='flex flex-col flex-1'>
                <h2 className='text-xl font-semiboad text-gray-900 dark:text-gray-100'> 
                    card number one 
                </h2>
                <p className='text-gray-600 dark:text-gray-300 mt-2'>
                    the information of the card
                </p>

                <div className='mt-4 flex gap-4'>
                    <button className='px-4 py-2 bg-blue hover:bg-blue0700 text-white rounded-lg text-sm transition'>
                        Action
                    </button>

                    <button className='px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 darl:hover:bg-gray-600 
                    text-gray-800 dark:text-gray-200 rounded-lg text-sm transition'>
                        Secondary
                    </button>
                </div>
            </div>
             </div>
        

    );
}

export default Cardcontent1;