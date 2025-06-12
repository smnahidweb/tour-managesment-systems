import React, { use } from 'react';
import FeaturedCard from './FeaturedCard';
import { NavLink } from 'react-router';

const HomeFeatured = ({FeaturedPromise}) => {
    const FeaturedData = use(FeaturedPromise)
    console.log(FeaturedData)
    const slicedData = FeaturedData.slice(0,6);
    return (
        <div>
          <div className="text-center my-12 px-4 max-w-3xl mx-auto">
  <h2 className="text-4xl font-extrabold  mb-2 text-[var(--HEADING-TITLE-TEXT)]">
    Explore Our Featured Tour Packages
  </h2>
  <p className="text-xl text-[var(--HEADING-TITLE-TEXT)]   font-medium mb-2">
    Handpicked journeys for unforgettable memories.
  </p>
  <p className=" text-sm md:text-base">
    From serene hills to vibrant beaches, our featured packages are designed to offer the perfect mix of adventure, relaxation, and culture. Discover the tours that travelers love the most.
  </p>
</div>

            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12'>
                {
                   slicedData.map(data => <FeaturedCard key={data._id} data = {data} ></FeaturedCard>)
                }
            </div>

           <div >
             <NavLink to={'/allPackages'}>
              <button className=" flex justify-center items-center
  btn-wide mb-10 rounded-full text-white font-semibold py-2 cursor-pointer
  bg-gradient-to-r from-green-400 via-green-500 to-green-600
  hover:from-green-500 hover:via-green-600 hover:to-green-700
  shadow-lg hover:shadow-xl
  transform hover:-translate-y-1
  transition-all duration-300 ease-in-out
  focus:outline-none focus:ring-4 focus:ring-green-300
">
  Show All
</button>
            </NavLink>
           </div>
            
        </div>
    );
};

export default HomeFeatured;