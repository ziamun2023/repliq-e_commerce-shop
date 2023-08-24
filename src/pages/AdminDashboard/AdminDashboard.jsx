import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import dash from "../../assets/dashboard.jpg"
const AdminDashboard = () => {
    return (
        <div className='min-h-[800px] grid grid-cols-5  overflow-y-scroll'>
          
            <div className='flex flex-col  justify-center col-span-1 bg-white '>
            <img className='absolute top-0 h-[800px] object-cover w-full' src={dash} alt="" />
                <nav>
                <NavLink
      activeclassName="navbar__link--active"
      className="navbar__link text-2xl group mx-5 my-4 "
      to="/admindashboard/add"
    >
     Add item
     <p className='h-[3px] w-0 group-hover:w-40 bg-red-500 duration-300'></p>
    </NavLink>
    <NavLink
      activeclassName="navbar__link--active"
      className="navbar__link text-2xl group mx-5 my-4 "
      to="/admindashboard/myproduct"
    >
   My products
   <p className='h-[3px] w-0 group-hover:w-40 bg-red-500 duration-300'></p>
    </NavLink>
    <NavLink
      activeclassName="navbar__link--active"
      className="navbar__link text-2xl group mx-5 my-4 "
      to="/admindashboard/myproduct"
    >
  Log out
  <p className='h-[3px] w-0 group-hover:w-40 bg-red-500 duration-300'></p>
    </NavLink>
                </nav>
         
            </div>
            <div className='col-span-4 relative rounded-3xl  overflow-y-scroll min-h-[800px]'>
         
                <Outlet/>

            </div>
            
        </div>
    );
};

export default AdminDashboard;

// admindashboard