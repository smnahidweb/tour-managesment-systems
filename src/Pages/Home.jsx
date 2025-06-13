import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import HomeFeatured from '../Components/HomeFeatured';
import Loading from '../Components/Loading';
import Reviews from '../Components/Reviews';
import AboutCard from '../Components/AboutCard';
import AboutGuide from '../Components/AboutGuide';
import Statistics from '../Components/Statistics';
import ShorTours from '../Components/ShorTours';
import MidLevelTour from '../Components/MidLevelTour';

const Home = () => {
  const FeaturedPromise = fetch('https://booking-management-system-server-si.vercel.app/allPackages').then(res => res.json())
    return (
        <div>
          <Banner></Banner>
         <Suspense fallback={ <Loading></Loading> }>
           <HomeFeatured FeaturedPromise = {FeaturedPromise} ></HomeFeatured>
         </Suspense>
         <div>
          <ShorTours></ShorTours>
         </div>
         <div>
          <MidLevelTour></MidLevelTour>
         </div>
         <div>
          <Reviews></Reviews>
         </div>
         <div className='mb-10'>
          <AboutGuide></AboutGuide>
         </div>
         <div className='mb-10'>
          <AboutCard></AboutCard>
         </div>
         <div>
          <Statistics > </Statistics>
         </div>
        </div>
    );
};

export default Home;