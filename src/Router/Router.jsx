import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import AllPackages from '../Components/AllPackages';
import About from '../Pages/About';

const Router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            path:"/",
            Component:Home
        },
        {
            path:"/register",
            Component:Register
        },
        {
            path:"/login",
            Component:Login
        },
        {
            path:'/allPackages',
            Component:AllPackages
        },
        {
            path:'/aboutUs',
            Component:About
        }
       
    ]
  },
]);


export default Router;