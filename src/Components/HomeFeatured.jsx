import React, { use } from 'react';
import FeaturedCard from './FeaturedCard';
import { NavLink } from 'react-router';

const HomeFeatured = ({FeaturedPromise}) => {
    const FeaturedData = use(FeaturedPromise)
    console.log(FeaturedData)
    const slicedData = FeaturedData.slice(0,6);
    return (
        <div>
            <h2 className='text-green-600 font-bold text-center text-4xl mt-12 mb-12'>Featured Packages</h2>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
                {
                   slicedData.map(data => <FeaturedCard key={data._id} data = {data} ></FeaturedCard>)
                }
            </div>

           <div className='text-center'>
             <NavLink to={'/allPackages'}>
                <button className='btn bg-green-600 text-white btn-wide mb-10 text-center '>
                   Show All
                </button>
            </NavLink>
           </div>
            
        </div>
    );
};

export default HomeFeatured;