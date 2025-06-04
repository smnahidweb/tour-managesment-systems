import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[400px] mt-2 w-full overflow-hidden rounded-2xl">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/bg.mp4" // Replace with your local or hosted video path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Discover Your Perfect Getaway
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mb-6"
        >
          Explore breathtaking destinations with TourNest. Tailored packages await your next adventure.
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
    </div>
  );
};

export default Banner;
