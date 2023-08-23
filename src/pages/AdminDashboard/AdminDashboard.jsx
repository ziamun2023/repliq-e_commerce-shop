import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
    return (
        <div className='min-h-[800px] grid grid-cols-5'>
            <div className='flex flex-col justify-center col-span-1 bg-[rgb(230,230,230)]'>

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
            <div className='col-span-4'>
                <Outlet/>

            </div>
            
        </div>
    );
};

export default AdminDashboard;

// admindashboard