import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';

const Nav = () => {
    const {user}=useContext(AuthContext)
    console.log(user);

    return (
        <nav className="border-b-2 flex justify-around">
      
        <ul className="navbar  text-2xl tracking-wider gap-4">
         
      <li ><a href="#home">home</a>
            </li>
            <li><a href="#service">Popular Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
       
     
        </ul>
      {user?  "":<div className='font1 text-2xl tracking-wider'>   <Link to='/login'>Log in</Link>
     
     </div> }
     {user?.role==="Admin"?<div className='font1 text-2xl tracking-wider'>   <Link to='/admindashboard/myproduct'>dashboard</Link>
     
     </div> :""}
     


   
   
    </nav>
    );
};

export default Nav;