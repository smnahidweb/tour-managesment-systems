import React from 'react';
import { CheckCircle } from 'lucide-react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
const AboutCard = () => {
    const img = 'https://i.ibb.co/Q3N6hRPH/couple-family-traveling-together.jpg';
    const img1 = 'https://i.ibb.co/qLTxyDrB/nahid.jpg'
    const img2 = 'https://i.ibb.co/bj4tjDgv/lawer10.jpg'
    const img3 = 'https://i.ibb.co/G3Fybcxv/lawer11.jpg';
const features = [
  'Trusted, Local Travel Experts',
  'Flexible, Hassle-Free Bookings',
  'Real-Time Itinerary Updates',
  'Trusted, Local Travel Experts',
  'Flexible, Hassle-Free Bookings',
  'Real-Time Itinerary Updates',
];
    return (
        <div>
             <section className="bg-green-50 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left: Image */}
        <div className="relative w-full h-full md:w-1/2">
          <img
            src={img}
            alt="Traveler"
            className="rounded-3xl object-cover w-full h-full"
          />
          <div className="absolute bottom-6 left-6 bg-[#28a745] text-white px-6 py-4 rounded-2xl text-center shadow-lg">
            <p className="text-4xl font-bold leading-none">15+</p>
            <p className="text-sm font-semibold mt-1">Years of Experience</p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Our Journey Memorable <br /> Adventures Worldwide
          </h2>
          <p className="mt-4 text-base text-gray-600">
            We offer carefully curated destinations and tours that capture the true essence of location, ensuring you experience. Our attraction pass save you more than buying individual tickets for your tour package system.
          </p>

          {/* Quote box */}
          <div className="bg-white mt-6 p-6 border-l-4 border-green-400 shadow rounded-xl">
            <p className="font-semibold text-green-600">
             "Explore Freely, Travel Smart – with TourNest."
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-sm">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-4 h-4" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button and Avatars */}
          <div className="mt-8 flex items-center gap-6">
            <NavLink to={'/aboutUs'}>
                <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        
          className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:from-green-600 hover:to-teal-600 transition duration-300"
        >
          Explore Packages
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
        </div>
    );
};

export default AboutCard;