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
import Booking from '../Pages/Booking';
import Update from '../Pages/Update';

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
            path:'/addPackage',
            element: <PrivateRoute>
                <AddPackages></AddPackages>
            </PrivateRoute>
        },
        {
            path:'/myBooking',
            element:<PrivateRoute>
                <MyBooking></MyBooking>
            </PrivateRoute>,
            // loader:({params})=> fetch(`http://localhost:3000/allPackages/${params.id}`)

        },
        {
            path:'/managePackages',
            element:<PrivateRoute>
                <ManageMyPackages></ManageMyPackages>
            </PrivateRoute>,
             loader: ()=> fetch('http://localhost:3000/allPackages'),
            

        },
        {
            path:'/allPackages/:id',
            element:
                <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
            loader:({params})=> fetch(`http://localhost:3000/allPackages/${params.id}`)
        },
        {
            path:'/booking/:id',
            element:<PrivateRoute>
                <Booking></Booking>
            </PrivateRoute>,
             loader:({params})=> fetch(`http://localhost:3000/allPackages/${params.id}`)
        },
        {
            path:'update/:id',
            element:<PrivateRoute>
                <Update></Update>
            </PrivateRoute>,
              loader:({params})=> fetch(`http://localhost:3000/allPackages/${params.id}`)
        }
       
    ]
  },
]);


export default Router;