import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import CartDesign1 from '../ReusableComponenet/CartDesign1';
import CartDesign2 from '../ReusableComponenet/CartDesign2';
import dash2 from "../../assets/keyboard.jpg"

const Allproducts = () => {
    const {data: products =[], }=useQuery(['productsShop'],async()=>{
        const res=await fetch(`http://localhost:5000/allproducts`)
        return res.json()
      })
      console.log(products);


    //   event.target.__reactProps$o7u3t9mpen.children
   
    return (
        <div className=''>
            
            <div className='h-[200px] bg-[rgb(230,230,230)]  '>
<p className='font1 text-4xl my-auto text-start pt-20 ps-10'>Home | <span className='text-red-500'>Products</span>

</p>
            </div>
          
          <div className='grid lg:grid-cols-6 mt-20 '>
          <div className='col-span-4'>
          <div className='grid gap-7 '>
          {products.map((item)=><CartDesign2 item={item} key={item._id}>


</CartDesign2>)}
          </div>
     

</div>
<div className='col-span-2'>
    <p className='font1 text-3xl  '>Categories</p>
    <div className='grid gap-3'>
    <div  defaultValue={'accessories'} className=' grid grid-cols-2 '>    <p className='text-[19px] font1   font-normal'>Accessories</p>    <p className='text-[19px] font1   font-normal'>13</p></div>
    <div  defaultValue={'laptop'} className=' grid grid-cols-2 '>    <p className='text-[19px] font1   font-normal'>Laptop</p>    <p className='text-[19px] font1   font-normal'>13</p></div>
    <div  defaultValue={'ipad'} className=' grid grid-cols-2 '>    <p className='text-[19px] font1   font-normal'>Ipad</p>    <p className='text-[19px] font1   font-normal'>13</p></div>
    <div  defaultValue={'phone'} className=' grid grid-cols-2 '>    <p className='text-[19px] font1   font-normal'>phone</p>    <p className='text-[19px] font1   font-normal'>13</p></div>
    <div  defaultValue={'headphone'} className=' grid grid-cols-2 '>    <p className='text-[19px] font1   font-normal'>Head phone</p>    <p className='text-[19px] font1   font-normal'>13</p></div>
    <div  defaultValue={'charger'} className=' grid grid-cols-2 '>    <p className='text-[19px] font1   font-normal'>Charger</p>    <p className='text-[19px] font1   font-normal'>13</p></div>
    </div>
  
    
</div>
          </div>
            
        </div>
    );
};

export default Allproducts;