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
import MyBooking from '../Pages/MyBooking';
import AddPackages from '../Pages/AddPackages';
import ManageMyPackages from '../Pages/ManageMyPackages';
import Loading from '../Components/Loading';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Details from '../Pages/Details';

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
            Component:AllPackages,
            loader: ()=> fetch('http://localhost:3000/allPackages'),
            hydrateFallbackElement:<Loading></Loading>
        },
        {
            path:'/aboutUs',
            Component:About
        },
        {
            path:'/myBooking',
            element:<MyBooking></MyBooking>
        },
        {
            path:'/addPackage',
            element: <AddPackages></AddPackages>
        },
        {
            path:'/myPackages',
            element:<ManageMyPackages></ManageMyPackages>
        },
        {
            path:'/allPackages/:id',
            element:
                <Details></Details>,
            loader:({params})=> fetch(`http://localhost:3000/allPackages/${params.id}`)
        }
       
    ]
  },
]);


export default Router;