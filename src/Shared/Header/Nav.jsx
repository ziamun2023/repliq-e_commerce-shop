import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="border-b-2 flex justify-around">
      
        <ul className="navbar">
         
      <li ><a href="#home">home</a>
            </li>
            <li><a href="#service">Popular Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
       
     
        </ul>
     <div>   <Link to='/login'>Log in</Link>
       </div>
    </nav>
    );
};

export default Nav;