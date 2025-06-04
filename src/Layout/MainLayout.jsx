import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <div className='mx-auto container'>
               <Outlet></Outlet>
         </div>
        </div>
    );
};

export default MainLayout;