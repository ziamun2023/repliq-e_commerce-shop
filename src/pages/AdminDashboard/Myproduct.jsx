import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Cart from './Cart';
import { IoMdNotifications } from 'react-icons/Io';
import { BiSolidUser } from 'react-icons/Bi';
import { BiSolidSearchAlt2 } from 'react-icons/Bi';
import { AiOutlineCaretDown } from 'react-icons/Ai';
import { AiOutlineFileDone } from 'react-icons/Ai';
import { MdOutlinePendingActions } from 'react-icons/Md';
import { RiSecurePaymentFill } from 'react-icons/Ri';
import { TbTruckDelivery } from 'react-icons/Tb';
import { ImCancelCircle } from 'react-icons/Im';
import { RiCashLine } from 'react-icons/Ri';
import { PiHandCoinsFill } from 'react-icons/Pi';
import { BiSolidPurchaseTag } from 'react-icons/Bi';

const Myproduct = () => {
    
    const {user}=useContext(AuthContext)
    console.log(user);
    const {data: products =[], refetch}=useQuery(['Property'],async()=>{
        const res=await fetch(`http://localhost:5000/allproducts`,
        {
            headers:{
           
              authorization: `bearer ${localStorage.getItem('access-token')}`
            },
          })
        return res.json()
      })
      console.log(products);

      

      const handleDelete = id =>  {
        JSAlert.confirm("Are you sure you want to delete this file?").then(function(result) {

    if (result)
    fetch(`https://hunter-server-six.vercel.app/deleteProperty/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {

            if(data.acknowledged){
                refetch()
                JSAlert.alert("File deleted!");
            }
    })
    else{
        navigate('/OwnerDashBoard/Myproperty')

    }
           
        

  

});

      }

    return (
 <div  >

<div className='flex justify-between mx-20'>
<p data-aos="fade-in" className='font1 text-2xl font-bold my-10 '>Products</p>
<div className='my-auto flex gap-6  '>
    <p data-aos="fade-left"   data-aos-delay="1000"
    data-aos-duration="900"
    data-aos-easing="ease-in-out" className='text-gray-800 my-auto hover:text-red-500 duration-300'><IoMdNotifications size={30}/></p>
    <p data-aos="fade-left"  data-aos-delay="500"
    data-aos-duration="900"
    data-aos-easing="ease-in-out" className='text-gray-800 my-auto hover:text-red-500 duration-300'><BiSolidSearchAlt2 size={30}/></p>
    <p data-aos="fade-left"   data-aos-delay="40"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"className='text-gray-800 rounded-full p-2 bg-red-500 my-auto'><BiSolidUser size={30}/></p>

</div>
</div>

<div className='grid grid-cols-2 '>
    <div className='mx-10'>
        <div data-aos="zoom-out"    data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className=' shadow-md  border-t-2 border-l-2 border-red-200 rounded-lg h-[350px]  mb-6 '>
            <p className='font1 text-[30px] text-center font-bold '>Order </p>
           <div className='grid grid-cols-2 mt-6'>
           <div className='my-auto mx-auto'>   <img width="150" height="94" src="https://img.icons8.com/3d-fluency/94/bill.png" alt="bill"/></div>
            <div>
            <p className='font1 text-[25px]'>Statement</p>
  <div className='flex my-5'>
 <p><AiOutlineFileDone size={30}/> </p> <p className='font1 text-[18px]'>Confirmed : </p>  <p className='font1 text-[18px] mx-5'>49 Orders</p>
  </div>
  <div className='flex my-5'>
 <p><MdOutlinePendingActions size={30}/> </p> <p className='font1 text-[18px]'>Cash on delivery : </p>  <p className='font1 text-[18px] mx-5'>76 Orders</p>
  </div>
  <div className='flex my-5'>
 <p><RiSecurePaymentFill size={30}/> </p> <p className='font1 text-[18px]'>Payment received : </p>  <p className='font1 text-[18px] mx-5'>76 Orders</p>
  </div>


                
            </div>
           </div>
     
        </div>
        <div className='grid-cols-2 gap-5 grid justify-items-center'>

        <div data-aos="zoom-in"    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className='grid justify-items-center w-full  shadow-md    rounded-lg'>
        <div>
            <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/supplier.png" alt="supplier"/>
            </div>
            <div>
            <div className='flex my-5 '>
 <p className='text-gray-800 mx-2 font-bold '><TbTruckDelivery size={30}/> </p> <p className='font1 text-[18px] text-gray-900 '>Delivery on process : </p>  <p className='font1 text-[18px] text-gray-900 mx-2 '>76 Orders</p>
  </div>
            <div className='flex my-5'>
 <p className='text-gray-800 mx-2 font-bold '><ImCancelCircle size={30}/> </p> <p className='font1 text-[18px] text-gray-900'>Delivery canceled : </p>  <p className='font1 text-[18px] text-gray-900 mx-2 '>12 Orders</p>
  </div>

            </div>
        </div>
            <div data-aos="zoom-out"    data-aos-delay="60"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className=' w-full px-2 shadow-md   rounded-md'>
            <p className='font1 text-[30px] text-center font-bold '>Earning </p>
            <div className='flex my-5'>
 <p><RiCashLine size={30}/> </p> <p className='font1 text-[18px]'>Money Received : </p>  <p className='font1 text-[18px] mx-5'>49 Orders</p>
  </div>
  <div className='flex my-5'>
 <p><PiHandCoinsFill size={30}/> </p> <p className='font1 text-[18px]'>Pending : </p>  <p className='font1 text-[18px] mx-5'>76 Orders</p>
  </div>
  <div className='flex my-5'>
 <p>< BiSolidPurchaseTag size={30}/> </p> <p className='font1 text-[18px]'>other cost : </p>  <p className='font1 text-[18px] mx-5'>76 Orders</p>
  </div>
  <p className='w-full mx-2 h-[1px] bg-black'></p>
<div className='flex justify-around mx-20' >

<p>Total:</p><p> $300</p>
</div>

            </div>
       
        </div>
  
    </div>
    <div>
    <div data-aos="zoom-in"    data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"   className='grid justify-items-center'>
        <div  className='grid grid-cols-6 w-[600px] justify-items-center rounded-md border-2 border-red-300 py-2 '>

            <p className='font-bold my-auto text-[14px] mx-auto font-sans '>Serial code</p>
            <p className='font-bold my-auto text-[14px] mx-auto font-sans '>Name</p>
            <p className='font-bold my-auto text-[14px] mx-auto font-sans '>category</p>
            <p className='font-bold my-auto text-[14px] mx-auto font-sans '>Quantity available</p>
            <p className='font-bold my-auto text-[14px] mx-auto font-sans '>Price</p>
            <p className='font-bold my-auto text-[14px] mx-auto font-sans '>upload date</p>
        </div>
            <div className='grid grid-cols-1 overflow-y-scroll scrollbar   h-[600px]'>
            {
                products.map(item=><Cart item={item}  key={item._id}></Cart>)
            }

            {products.length>7 ? <div className='absolute top-[700px] right-[700px] downArrow text-red-500' ><AiOutlineCaretDown size={40}/></div>: ""}

            

            
        </div>
    </div>

    </div>


</div>



 </div>
    );
};

export default Myproduct;