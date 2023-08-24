import React from 'react';

const Cart = ({item}) => {
    const {name,picture,_id,category,quantity,price ,start}=item
    return (
        <div   className='w-[600px] relative group rounded-md grid grid-cols-6  border-2 my-2 border-gray-300  justify-items-center'>
            <div className='my-auto text-[15px] font1'>#{_id.slice(0,8)}</div>
            <div className='my-auto text-[15px]'>   <img className='w-14 border-2 border-red-300 h-14 rounded-full object-cover  ' src={picture} alt="" /></div>
            <div className='my-auto text-[15px] font1'>
                {category}
            </div>
            <div className='my-auto text-[15px] font1'>
                {quantity}
            </div>
            <div className='my-auto text-[15px] font1'>
                {price}
            </div>
            <div className='my-auto text-[15px] font1'>
                {start}
            </div>
         
            <div className='absolute flex justify-around w-[200px] group-hover:left-0 -left-[300px]  h-full rounded-sm rounded-r-xl duration-500  bg-gray-500 opacity-0 group-hover:opacity-100'>
<p className='text-white my-auto font1 cursor-pointer'>Edit</p>
            </div>

            
        </div>
    );
};

export default Cart;