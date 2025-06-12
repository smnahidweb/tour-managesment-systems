import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GuideCard from './GuideCard';

const AboutGuide = () => {
    const [guide,setGuide] = useState([])

   useEffect(() => {
  axios.get('http://localhost:3000/allPackages')
    .then(res => {
      const unique = Array.from(
        new Map(
          res.data.map(tour => [tour.guideName, {
            guideName: tour.guideName,
            guideEmail: tour.guideEmail,
            guidePhoto: tour.guidePhoto
          }])
        ).values()
      );
      setGuide(unique);
    });
}, []);

    return (
        <div>
<div className="text-center my-10 px-4 max-w-3xl mx-auto">
  <h3 className="text-4xl font-extrabold  text-[var(--HEADING-TITLE-TEXT)] mb-2">
    Meet Our Expert Tour Guides
  </h3>
  <p className="text-xl text-[var(--TEXT-COLOR)] dark:text-gray-300 font-medium mb-3">
    Passionate. Experienced. Trusted.
  </p>
  <p className="text-[var(--TEXT-COLOR)] dark:text-gray-400 text-sm md:text-base">
    Our tour guides are not just professionals—they're storytellers, adventurers, and local experts who make your journey safe, enriching, and unforgettable. Get to know the people who bring your travel dreams to life.
  </p>
</div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
               
                {
                    guide.map(single => <GuideCard single = {single}></GuideCard>)
                }
            </div>
        </div>
    );
};

export default AboutGuide;