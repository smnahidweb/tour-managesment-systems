import React from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import { FaBoxOpen, FaCompass, FaHeadset, FaAward } from 'react-icons/fa';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden rounded-2xl mt-2">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10 " />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4 mt-40">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Your Journey Starts With
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
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200"
        >
          From lush nature trails to thrilling adventures, TourNest lets you explore, book, and manage your dream trips—all in one place.
        </motion.p>

        {/* Call to Action */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/allPackages')}
          className="bg-green-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:from-green-600 hover:to-teal-600 transition cursor-pointer duration-300"
        >
          Explore Packages
        </motion.button>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-white">
          {[
            { icon: <FaBoxOpen className="text-3xl" />, title: 'Custom Packages' },
            { icon: <FaCompass className="text-3xl" />, title: 'Easy Booking' },
            { icon: <FaHeadset className="text-3xl" />, title: '24/7 Support' },
            { icon: <FaAward className="text-3xl" />, title: 'Trusted by Travelers' },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center w-28">
              {f.icon}
              <span className="mt-1 text-sm text-center">{f.title}</span>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="mt-10"
        >
          <div className="w-5 h-10 border-2 border-white rounded-full flex items-center justify-center mx-auto">
            <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
