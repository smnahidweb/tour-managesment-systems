import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FaBoxOpen, FaCompass, FaHeadset, FaAward } from 'react-icons/fa';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[70vh] overflow-hidden ">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-2 sm:px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl font-bold mb-3 leading-tight"
        >
          Discover. Book. Travel.
          <motion.span
            animate={{
              color: ['#22c55e', '#10b981', '#4ade80', '#22c55e'],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block ml-2"
          >
            TourNest
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-base sm:text-lg max-w-2xl text-gray-300 mb-6"
        >
          Book unforgettable experiences with trusted local guides, exclusive packages, and seamless support.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/popular-tour')}
          className="bg-green-500 cursor-pointer px-6 py-3 rounded-full text-white font-semibold shadow-md hover:bg-green-700 transition"
        >
          Explore Popular Tours
        </motion.button>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-white">
          {[
            { icon: <FaBoxOpen className="text-3xl" />, title: 'Custom Trips' },
            { icon: <FaCompass className="text-3xl" />, title: 'Easy Booking' },
            { icon: <FaHeadset className="text-3xl" />, title: '24/7 Help' },
            { icon: <FaAward className="text-3xl" />, title: 'Top Rated' },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center w-24">
              {f.icon}
              <span className="mt-1 text-sm text-center">{f.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
