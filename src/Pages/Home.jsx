import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import HomeFeatured from '../Components/HomeFeatured';
import Loading from '../Components/Loading';
import Reviews from '../Components/Reviews';
import AboutCard from '../Components/AboutCard';

const Home = () => {
  const FeaturedPromise = fetch('http://localhost:3000/allPackages').then(res => res.json())
    return (
        <div>
          <Banner></Banner>
         <Suspense fallback={ <Loading></Loading> }>
           <HomeFeatured FeaturedPromise = {FeaturedPromise} ></HomeFeatured>
         </Suspense>
         <div>
          <Reviews></Reviews>
         </div>
         <div>
          <AboutCard></AboutCard>
         </div>
        </div>
    );
};

export default Home;