import React from 'react';
import { useLoaderData } from 'react-router';
import AllPackagesCard from './AllPackagesCard';

const AllPackages = () => {
    const allPackages = useLoaderData()
    console.log(allPackages)
    return (
        <div>
          <h2 className='text-green-600 font-bold text-center text-4xl mt-12 mb-12'>All Packages</h2>
          <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
            {
                allPackages.map(pack => <AllPackagesCard key={pack._id} pack = {pack} ></AllPackagesCard>)
            }
          </div>
        </div>
    );
};

export default AllPackages;