import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div> 
            <Navbar></Navbar>
            <div className='mx-auto container min-h-screen'>
               <Outlet></Outlet>
         </div>
         <Footer></Footer>
        </div>
    );
};

export default MainLayout;