import React from 'react';

const SectionTitle = ({title,Subtitle}) => {
    return (
        <div className='text-center font1 '>
            <p className='text-4xl text-gray-800'>{title}</p>
            <p className=' text-gray-500'>{Subtitle}</p>
            
        </div>
    );
};

export default SectionTitle;