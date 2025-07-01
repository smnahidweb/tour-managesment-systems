import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-in-out',
    });
  }, []);

  const img = 'https://i.ibb.co/Q3N6hRPH/couple-family-traveling-together.jpg';
  const img1 = 'https://i.ibb.co/qLTxyDrB/nahid.jpg';
  const img2 = 'https://i.ibb.co/bj4tjDgv/lawer10.jpg';
  const img3 = 'https://i.ibb.co/G3Fybcxv/lawer11.jpg';

  const features = [
    'Trusted, Local Travel Experts',
    'Flexible, Hassle-Free Bookings',
    'Real-Time Itinerary Updates',
    'Personalized Trip Planning',
    '24/7 Customer Support',
    'Best Price Guarantee',
  ];

  return (
    <section className="py-20 px-6 md:px-16" data-aos="fade-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
        
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 flex items-stretch">
          <div className="w-full rounded-3xl overflow-hidden">
            <img
              src={img}
              alt="Traveler"
              className="object-cover w-full h-full max-h-[600px] rounded-3xl"
            />
          </div>
          <div className="absolute top-6 left-6 bg-[#28a745] text-white px-6 py-4 rounded-2xl text-center shadow-lg">
            <p className="text-4xl font-bold leading-none">15+</p>
            <p className="text-sm font-semibold mt-1">Years of Experience</p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-green-600 space-y-6 max-w-xl mx-auto md:mx-0">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[var(--HEADING-TITLE-TEXT)]">
            Our Journey: Memorable Adventures Worldwide
          </h2>

          <p className="text-base text-[var(--TEXT-COLOR)] leading-relaxed">
            We offer carefully curated destinations and tours that capture the true essence of location. Our attraction passes save you more than buying individual tickets for your tour package.
          </p>

          {/* Quote box */}
          <div className="bg-white p-6 border-l-4 border-green-400 shadow rounded-xl">
            <p className="font-semibold text-green-600">
              "Explore Freely, Travel Smart – with TourNest."
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <CheckCircle className="text-green-500 w-4 h-4" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button and Avatars */}
          <div className="pt-4 flex items-center gap-6">
            <NavLink to={'/aboutUs'}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:from-green-600 hover:to-teal-600 transition duration-300"
              >
                Explore TourNest
              </motion.button>
            </NavLink>
            <div className="flex items-center -space-x-3">
              <img src={img1} className="w-10 h-10 rounded-full border-2 border-white" alt="" />
              <img src={img2} className="w-10 h-10 rounded-full border-2 border-white" alt="" />
              <img src={img3} className="w-10 h-10 rounded-full border-2 border-white" alt="" />
              <div className="ml-4 bg-green-400 text-white px-3 py-1 rounded-full text-sm font-medium shadow">8K+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
