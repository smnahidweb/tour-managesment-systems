import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex flex-col items-center justify-center z-[9999]">
      {/* Spinning border with glow */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
        className="w-20 h-20 rounded-full border-4 border-green-600 border-t-transparent shadow-[0_0_10px_rgba(34,197,94,0.7)] mb-6 flex items-center justify-center"
      >
        {/* Static image inside */}
        <img
          src="/logo2.jpg"
          alt="TourNest Logo"
          className="w-14 h-14 rounded-full object-cover"
        />
      </motion.div>
      <p className="text-green-600 dark:text-green-400 text-lg font-semibold tracking-wide">
        Loading TourNest...
      </p>
    </div>
  );
};

export default LoadingScreen;
