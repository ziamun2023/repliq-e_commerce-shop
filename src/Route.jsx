import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Mainlayout from './MainLayout/Mainlayout';

import Home from './pages/Home/Home';

import CreateAccount from './pages/Signup/CreateAccount';
import Verify from './pages/Signup/Verify';
import SignIn from './pages/login/SignIn';
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
    element: <SignIn/>},
    {path:'/verify',
    element: <Verify/>},
    {path:'/signup',
    element: <CreateAccount/>}

  ]);  


            
