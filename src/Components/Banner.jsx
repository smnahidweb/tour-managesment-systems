import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const titleWords = [
  'Discover', 
  'Your', 
  'Perfect', 
  'Getaway'
];

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-r from-green-100 to-green-400 dark:from-gray-800 dark:to-gray-900 py-20 rounded-2xl mt-2">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-300 mb-6 flex justify-center flex-wrap gap-2">
          {titleWords.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.3 }}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-8"
        >
          Whether you're seeking adventure, relaxation, or a cultural journey, TourNest offers tailored packages for every traveler.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/allPackages')}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Explore All Packages
        </motion.button>
      </div>
    </section>
  );
};

export default Banner;
