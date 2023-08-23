import React from 'react';
import AOS from 'aos';
import JSAlert from 'js-alert'
import img from "../../assets/login1.jpg"
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// onSubmit={handleSUbmit}
const SignIn = () => {
    const notify = () => toast("account created successfully!");
    // const refresh=()=>{
    //     window.location.reload();
    // }
    const navigate=useNavigate()

  const handleSUbmit=(event)=>{
    event.preventDefault()
    // const name =event.target.name.value
    // const email=event.target.email.value
    const phoneNumber=event.target.number.value
    const password=event.target.password.value
   
  
    // const formdata= new FormData() 
    const info={password,phoneNumber}
    console.log(info)
   
      
    fetch(`http://localhost:5000/users`,{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify(info)
    })
    .then(res=>res.json())
    .then(result=>{
      
      
      if(result){
        JSAlert.alert("Succesfuly your account created");
        const itemJSON = JSON.stringify(info);
          localStorage.setItem('ownerInfo', itemJSON);
          localStorage.setItem('access-token', result.token)
          navigate('/home')
      
        //   refresh()
        
    console.log(result)
       }
       else {
        localStorage.removeItem('access-token')
    
       }
    })

   

  

  }
    return (
        <div
        className='grid background '>
               <ToastContainer />
            
            <img  className='absolute top-0 z-0'  src={img} alt="" />
        
            <div className='z-10'> 
<Link to='/home'>            <p className=' shadow-lg bg-red-400  py-2 text-black px-2 right-0 top-5 absolute'>Go Home</p></Link>
         

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
<form onSubmit={handleSUbmit} data-aos="zoom-out"    data-aos-offset="200"   data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" >
          <div className=''>
          {/* <div>
          
          <input
            type='text'
            name='name'
            placeholder=' Name'
            className='  bg-[rgb(247,247,247)] border-b-2 border-red-600 py-2 px-3'
          />


        </div> */}
          {/* <div>
          
          <input
            type='email'
            name='email'
            placeholder=' Name'
            className='  bg-[rgb(247,247,247)] border-b-2 border-red-600 mt-6 py-2 px-3'
          />


        </div> */}
            <div>
          
           <div className=''>
        
           <input
                type='number'
                name='number'
                placeholder='Number +880'
                className='  bg-[rgb(247,247,247)] border-b-2 border-red-600 mt-6 py-2 px-3'
              />
           </div>


            </div>
         
            <div>
          
          <input
            type='password'
            name='password'
            placeholder='password'
            className='  bg-[rgb(247,247,247)] border-b-2 border-red-600 mt-6 py-2 px-3'
          />


        </div>
   
         
          </div>

          <div>
          
        <input type="submit" className='border-2  mt-10   py-4 px-8 font-serif text-gray-800    ' value='SIgn Up' />
      
          </div>
         
        </form>
        {/* <img className='absolute w-[300px] hidden lg:block left-[600px] top-10' src={decor} alt="" /> */}
       
        

</div>

            </div>
        </div>
    );
};

export default SignIn;