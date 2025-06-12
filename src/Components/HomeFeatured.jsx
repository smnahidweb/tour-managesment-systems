import React, { use, useEffect } from 'react';
import FeaturedCard from './FeaturedCard';
import { NavLink } from 'react-router';
import 'aos/dist/aos.css';
import AOS from 'aos';
const HomeFeatured = ({FeaturedPromise}) => {
  useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 120,          
          easing: 'ease-in-out' 
        });
      }, []);
    const FeaturedData = use(FeaturedPromise)
    console.log(FeaturedData)
    const slicedData = FeaturedData.slice(0,6);
    return (
        <div>
          <div className="text-center my-12 px-4 max-w-3xl mx-auto" data-aos="fade-up">
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

           <div className='text-center '>
             <NavLink to={'/allPackages'}>
             <button className="bg-green-500 btn-wide mt-8 mb-12 mx-auto flex justify-center text-white rounded-md btn">
         Show All
        </button>
            </NavLink>
           </div>
            
        </div>
    );
};

export default HomeFeatured;