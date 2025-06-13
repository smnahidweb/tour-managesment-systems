import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MidLevelCard from './MidLevelCard';

const MidLevelTour = () => {
     const [midTours,setMidTours] = useState([])
        useEffect( ()=>{
            axios('http://localhost:3000/mid-tour')
            .then(result =>{
             setMidTours(result.data)
            })
    
        } ,[])
    return (
        <div >
            <div className="text-center my-12 px-4 max-w-3xl mx-auto" data-aos="fade-up">
 <h2 className="text-4xl font-extrabold mb-2 text-[var(--HEADING-TITLE-TEXT)]">
  Discover Our Mid-Length Adventures
</h2>
<p className="text-xl mb-2">
  Balanced tours spanning 3 to 5 days — perfect for deeper exploration without a long commitment.
</p>

</div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    midTours.map(mTour => <MidLevelCard mTour = {mTour}></MidLevelCard>)
                }
            </div>
            
        </div>
    );
};

export default MidLevelTour;