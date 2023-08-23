import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Mainlayout from './MainLayout/Mainlayout';
import Login from './pages/login/Login';
import Home from './pages/Home/Home';

import CreateAccount from './pages/Signup/CreateAccount';
export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children:[
        {path:'/home',
        element: <Home/>},

      
       
      ]

  
    
    },
    {path:'/login',
    element: <Login/>},
    {path:'/signup',
    element: <CreateAccount/>}

  ]);  


            
