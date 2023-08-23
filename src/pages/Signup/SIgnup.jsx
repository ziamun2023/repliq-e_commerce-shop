import React from 'react';
import AOS from 'aos';
import img from "../../assets/login1.jpg"
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// onSubmit={handleSUbmit}
const Sgnup = () => {
    return (
        <div
        className='grid background '>
            <img className='absolute top-0 z-0'  src={img} alt="" />
        
            <div className='z-10'> 
<Link to='/home'>            <p className=' shadow-lg  py-2 text-black px-2 right-0 top-5 absolute'>Go Home</p></Link>
         
<div className='flex justify-center gap-20 mt-52 '>
<Link to='/login'>
<p className='text-[40px] text-gray-800 font-bold text-center '>Log in</p></Link>
<Link to='/signup'>
<p className='text-[40px] text-gray-800 font-bold text-center '>Sign up</p></Link>
</div>
<div className='text-center mx-auto  rounded-xl lg:w-[400px] h-[400px] lg:h-[500px]  mt-20 '>
<form  data-aos="flip-up"
        data-aos-duration="3000" >
          <div className=''>
            <div>
          
              <input
                type='text'
                name='name'
                placeholder='Enter Your Name Here'
                className='  bg-[rgb(247,247,247)] py-2 px-3'
              />

<p className='bg-black w-52 h-[2px] mx-auto'></p>
            </div>
         
            <div>
          
          <input
            type='text'
            name='number'
            placeholder='number'
            className='  bg-[rgb(247,247,247)] py-2 px-3'
          />

<p className='bg-black w-52 h-[2px] mx-auto'></p>
        </div>
   
         
          </div>

          <div>
          
        <input type="submit" className='border-2 rounded-lg mt-5 bg-white  py-2 px-3 shadow-lg' value='Submit' />
       
          </div>
        </form>
        {/* <img className='absolute w-[300px] hidden lg:block left-[600px] top-10' src={decor} alt="" /> */}
       
        

</div>

            </div>
        </div>
    );
};

export default Signup;