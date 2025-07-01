import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GuideCard from './GuideCard';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutGuide = () => {
  const [guide, setGuide] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    axios.get('https://booking-management-system-server-si.vercel.app/allPackages')
      .then(res => {
        const unique = Array.from(
          new Map(
            res.data.map(tour => [
              tour.guideEmail, // use email as unique key
              {
                guideName: tour.guideName,
                guideEmail: tour.guideEmail,
                guidePhoto: tour.guidePhoto
              }
            ])
          ).values()
        );
        setGuide(unique.slice(0, 8)); // Limit to 8 guides
      });
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      {/* Heading */}
      <div className="text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up">
        <h3 className="text-4xl font-extrabold text-[var(--HEADING-TITLE-TEXT)] mb-2">
          Meet Our Expert Tour Guides
        </h3>
        <p className="text-xl text-[var(--TEXT-COLOR)] dark:text-gray-300 font-medium mb-3">
          Passionate. Experienced. Trusted.
        </p>
        <p className="text-[var(--TEXT-COLOR)] dark:text-gray-400 text-sm md:text-base">
          Our tour guides are not just professionals—they're storytellers, adventurers, and local experts who make your journey safe, enriching, and unforgettable. Get to know the people who bring your travel dreams to life.
        </p>
      </div>

      {/* Guide Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guide.slice(0,4).map((single, idx) => (
          <GuideCard key={idx} single={single} />
        ))}
      </div>
    </section>
  );
};

export default AboutGuide;
