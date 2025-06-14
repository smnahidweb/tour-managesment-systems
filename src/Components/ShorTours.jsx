import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShortTourscard from './ShortTourscard';

const ShorTours = () => {
    const [shortTours,setShortTours] = useState([])
    useEffect( ()=>{
        axios('https://booking-management-system-server-si.vercel.app/tour-short')
        .then(result =>{
         setShortTours(result.data)
        })

    } ,[])
    return (
        <div>
          <div className="text-center my-12 px-4 max-w-3xl mx-auto" data-aos="fade-up">
  <h2 className="text-4xl font-extrabold mb-2 text-[var(--HEADING-TITLE-TEXT)]">
    Explore Our Short Tours
  </h2>
  <p className="text-xl  mb-2">
    Perfect quick getaways lasting 1 to 2 days — ideal for busy travelers seeking refreshing escapes.
  </p>
</div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12'>
            {
                shortTours.map( sTour => <ShortTourscard sTour ={sTour} ></ShortTourscard> )
            }
          </div>
            
        </div>
    );
};

export default ShorTours;