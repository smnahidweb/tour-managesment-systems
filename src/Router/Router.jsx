import React from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Login from '../Pages/Login';

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
       
    ]
  },
]);


export default Router;