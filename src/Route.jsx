import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Mainlayout from './MainLayout/Mainlayout';
export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
    },
  ]);  


            
