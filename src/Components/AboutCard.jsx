import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { NavLink } from 'react-router'; // fixed import
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 120 });
  }, []);

  const features = [
    'Trusted, Local Travel Experts',
    'Flexible, Hassle-Free Bookings',
    'Real-Time Itinerary Updates',
    'Personalized Trip Planning',
    '24/7 Customer Support',
    'Best Price Guarantee',
  ];

  const teamImages = [
    'https://i.ibb.co/qLTxyDrB/nahid.jpg',
    'https://i.ibb.co/bj4tjDgv/lawer10.jpg',
    'https://i.ibb.co/G3Fybcxv/lawer11.jpg',
  ];

  return (
    <section className="py-16 px-6 md:px-16 dark:bg-gray-900" data-aos="fade-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://i.ibb.co/Q3N6hRPH/couple-family-traveling-together.jpg"
            alt="Traveler"
            className="w-full h-full max-h-[550px] object-cover rounded-3xl"
          />
          <div className="absolute top-5 left-5 bg-[var(--HEADING-TITLE-TEXT)] text-white px-5 py-3 rounded-xl shadow-lg">
            <p className="text-3xl font-bold">15+</p>
            <p className="text-sm font-medium mt-1">Years of Experience</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-6 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--HEADING-TITLE-TEXT)] dark:text-green-300">
            Why Choose TourNest?
          </h2>
          <p className="text-[var(--TEXT-COLOR)] dark:text-gray-300">
            We provide carefully curated tour experiences that highlight each destination's essence. Save more with our attraction passes, and travel smarter with real-time itinerary updates and local support.
          </p>

          {/* Quote */}
          <div className="bg-white dark:bg-gray-800 p-5 border-l-4 border-[var(--HEADING-TITLE-TEXT)] shadow rounded-lg">
            <p className="font-semibold text-[var(--HEADING-TITLE-TEXT)] dark:text-green-300">
              "Explore Freely, Travel Smart – with TourNest."
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm text-[var(--TEXT-COLOR)] dark:text-gray-200"
              >
                <CheckCircle className="text-[var(--HEADING-TITLE-TEXT)] w-4 h-4" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA + Avatars */}
          <div className="pt-3 flex flex-wrap items-center gap-6">
            <NavLink to={'/aboutUs'}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--HEADING-TITLE-TEXT)] hover:bg-green-700 px-6 py-2.5 rounded-full text-white font-medium shadow-lg"
              >
                Learn More
              </motion.button>
            </NavLink>
            <div className="flex items-center -space-x-3">
              {teamImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-md"
                  alt="team"
                />
              ))}
              <div className="ml-4 bg-[var(--HEADING-TITLE-TEXT)] text-white px-3 py-1 rounded-full text-sm font-semibold shadow">
                8K+ Travelers
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCard;
