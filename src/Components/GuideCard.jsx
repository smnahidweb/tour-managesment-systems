import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
const GuideCard = ({single}) => {
   useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
          offset: 120,          
          easing: 'ease-in-out' 
        });
      }, []);
    const {
        guideName,
        guidePhoto,
        guideEmail

    } = single
    return (
       <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700" data-aos="fade-up">
      
      {/* Header background */}
      <div className="h-36 bg-gradient-to-tr from-green-600 to-blue-500"></div>

      {/* Profile image */}
      <div className="-mt-16 flex justify-center">
        <img
          src={guidePhoto}
          alt={guideName}
          className="w-36 h-36 rounded-full border-4 border-white dark:border-gray-900 object-cover"
        />
      </div>

      {/* Guide Info */}
      <div className="px-8 py-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{guideName}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{guideEmail}</p>
      </div>

      {/* Tags */}
      <div className="px-8 pb-4 flex justify-center space-x-3">
        <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Tour Guide</span>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Experienced</span>
      </div>

      {/* Social Icons */}
      <div className="px-8 pb-6 pt-3 flex justify-center space-x-6">
        <FaFacebookF className="text-gray-500 dark:text-gray-400 hover:text-blue-600 cursor-pointer transition" size={20} />
        <FaLinkedinIn className="text-gray-500 dark:text-gray-400 hover:text-blue-700 cursor-pointer transition" size={20} />
        <FaTwitter className="text-gray-500 dark:text-gray-400 hover:text-blue-400 cursor-pointer transition" size={20} />
      </div>
    </div>
    );
};

export default GuideCard;