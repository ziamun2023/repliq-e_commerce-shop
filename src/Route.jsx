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
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import Addproduct from './pages/AdminDashboard/Addproduct';
import Myproduct from './pages/AdminDashboard/Myproduct';
export  const router = createBrowserRouter([
    {
      path: "/home",
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
    element: <CreateAccount/>},
    {
      path:'admindashboard',
      element:<AdminDashboard/>,
      children:[
       {
        path:'/admindashboard/add',
        element:<Addproduct/>
       },
       {
        path:'/admindashboard/myproduct',
        element:<Myproduct/>
       }
      ]
    }

  ]);  


            
