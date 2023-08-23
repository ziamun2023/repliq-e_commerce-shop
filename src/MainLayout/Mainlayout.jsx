import React from 'react';
import Nav from '../Shared/Header/Nav';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <>
        <Nav/>
     <Outlet/>
        
            
        </>
    );
};

export default Mainlayout;