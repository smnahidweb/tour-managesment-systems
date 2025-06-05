import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import HomeFeatured from '../Components/HomeFeatured';
import Loading from '../Components/Loading';

const Home = () => {
  const FeaturedPromise = fetch('http://localhost:3000/allPackages').then(res => res.json())
    return (
        <div>
          <Banner></Banner>
         <Suspense fallback={ <Loading></Loading> }>
           <HomeFeatured FeaturedPromise = {FeaturedPromise} ></HomeFeatured>
         </Suspense>
        </div>
    );
};

export default Home;