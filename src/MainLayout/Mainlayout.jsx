import React from 'react';
import Nav from '../Shared/Header/Nav';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Mainlayout = () => {
    return (
        <>
        <Nav/>
     <Outlet/>
     <ToastContainer />
        
            
        </>
    );
};

export default Mainlayout;