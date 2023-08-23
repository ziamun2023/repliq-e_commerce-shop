import React from 'react';
import AOS from 'aos';
import img from "../../assets/login1.jpg"
import { Link, NavLink } from 'react-router-dom';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// onSubmit={handleSUbmit}
const Login = () => {
    return (
        <div
        className='grid background '>
            <img   className='absolute top-0 z-0'  src={img} alt="" />
        
            <div className='z-10'> 
<Link to='/home'>            <p className=' shadow-lg   bg-red-400 py-2 text-black px-2 right-0 top-5 absolute'>Go Home</p></Link>
         

<nav className="navbar mt-52">
  
    <NavLink
      activeclassName="navbar__link--active"
      className="navbar__link text-3xl mx-5 font1"
      to="/login"
    >
      Login
    </NavLink>
    <NavLink
      activeclassName="navbar__link--active"
      className="navbar__link text-3xl mx-5 font1"
      to="/signup"
    >
     Sign up
    </NavLink>
  </nav>
<div className='text-center mx-auto  rounded-xl lg:w-[400px] h-[400px] lg:h-[500px]  mt-20 '>
<form data-aos="zoom-out"    data-aos-offset="200"   data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
          <div className=''>
            <div>
          
              <input
                type='number'
                name='name'
                placeholder='Number'
                className='  bg-[rgb(247,247,247)] mt-6 border-b-2 border-red-500 py-2 px-3'
              />


            </div>
         
            <div>
          
          <input
            type='password'
            name='number'
            placeholder='password'
            className='  bg-[rgb(247,247,247)] mt-6 border-b-2 border-red-500 py-2 px-3'
          />


        </div>
   
         
          </div>

          <div>
          <input type="submit" className='border-2  mt-10   py-4 px-8 font-serif text-gray-800 hover:bg-red-500 duration-700   ' value='Log in' />
       
          </div>
        </form>
        {/* <img className='absolute w-[300px] hidden lg:block left-[600px] top-10' src={decor} alt="" /> */}
       
        

</div>

            </div>
        </div>
    );
};

export default Login;