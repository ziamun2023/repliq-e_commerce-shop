import React from 'react';

const CategoryTitle = ({title,subtitle}) => {
    return (
        <div className='group'>
            <p className='hover:text-[rgb(255,65,55)]  duration-500 lg:text-4xl text-gray-800'>{title}</p>
            <p className='hover:text-[rgb(255,65,55)] duration-500  '>{subtitle}</p><p className='w-6 h-1 ease-in-out group-hover:w-20 duration-500 bg-[rgb(255,65,55)]'></p>
            
        </div>
    );
};

export default CategoryTitle;