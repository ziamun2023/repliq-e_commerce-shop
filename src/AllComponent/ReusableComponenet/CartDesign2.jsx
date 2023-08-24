import React, { useState } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/Ai';
import { Rating } from 'react-simple-star-rating'

const CartDesign2 = ({item}) => {
 
    const {picture,name,price,category,Description

    }=item
    return (
     <div className='grid grid-cols-5 relative w-full border-2 '>
        <div className='absolute top-0 right-0 m-5 hover:text-red-600'><AiOutlineHeart size={30}/></div>
        <div className='col-span-1'><img className='w-52 p-5' src={picture} alt="" /></div>
        <div className='col-span-4 py-6'>
            <p className='font1 text-3xl font-bold tracking-wider'>{name}</p>
            <p className='text-gray-500'>{category}</p>
            <div className='flex'>
            <img width="18" height="48" src="https://img.icons8.com/fluency/48/star.png" alt="star"/>
            <img width="18" height="48" src="https://img.icons8.com/fluency/48/star.png" alt="star"/>
            <img width="18" height="48" src="https://img.icons8.com/fluency/48/star.png" alt="star"/>
            <img width="18" height="48" src="https://img.icons8.com/fluency/48/star.png" alt="star"/>
            <img width="18" height="48" src="https://img.icons8.com/fluency/48/star.png" alt="star"/>
         
            </div>
            <p className='font1 text-2xl font-bold'>${price}</p>
            <p className='font1  '>{Description
}</p>
            <p className='font1  text-2xl mt-10 text-red-500 font-semibold cursor-pointer '>See details</p>
            
        </div>

     </div>
    );
};

export default CartDesign2;