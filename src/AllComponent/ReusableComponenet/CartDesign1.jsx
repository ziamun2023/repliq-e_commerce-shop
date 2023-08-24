import React from 'react';
import img from "../../assets/2.png"
import { FaShoppingCart } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/Ai';
const CartDesign1 = ({item}) => {
    // const {picture}=item
    return (
      <div className=''>
          <div className='h-[380px] group duration-300  overflow-hidden relative w-[420px] bg-[rgb(245,247,249)] '>
            <div className='w-full z-10 h-full absolute top-0 bg-black opacity-0 group-hover:opacity-25 duration-300'>

            </div>
     
          <div className='w-36 grid grid-cols-3 absolute top-40 left-32 z-20 translate-y-36 opacity-0 group-hover:opacity-100 duration-500   group-hover:translate-y-0 justify-items-center h-14 bg-gray-300 text-white'>
        <div className='hover:text-red-500  my-auto duration-500'>
            <FaShoppingCart size={30}/>
        </div>
      <div className='h-10  my-auto w-[2px] bg-white'></div>
        <div className='hover:text-red-500  my-auto duration-500'>
            <AiFillEye  size={30}/>
        </div>


     </div>
     <img className=' w-[420px] h-[380px] group-hover:scale-105 duration-200 absolute top-0 z-0   object-cover' src={img} alt="" />
     </div>
  
        <p>product name</p>
        <p className='text-red-500'>$ 50.99</p>
      </div>
    );
};

export default CartDesign1;