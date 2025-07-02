import React, { useEffect } from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Link } from 'react-router'; 

const MidLevelCard = ({ mTour }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-in-out'
    });
  }, []);

  const {
    _id,
    departureLocation,
    destination,
    imageUrl,
    tourName,
    duration,
    departureDate,
    price
  } = mTour;

  return (
    <div>
      <div
        className="dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 relative"
        data-aos="fade-up"
      >
        {/* Badge */}
        <span className="absolute top-3 left-3 bg-yellow-400 text-gray-900 font-semibold text-xs px-3 py-1 rounded-full shadow-md uppercase z-10">
          Mid Tour
        </span>

        {/* Tour Image */}
        <img
          src={imageUrl}
          alt={tourName}
          className="w-full h-48 object-cover"
        />

        {/* Content */}
        <div className="p-4">
          {/* Tour Name */}
          <h3 className="text-xl font-semibold text-[var(--HEADING-TITLE-TEXT)] dark:text-green-300 mb-2">
            {tourName}
          </h3>

          {/* Departure Info */}
          <div className="flex items-center gap-3 mb-3">
            <p className="text-sm font-medium text-[var(--TEXT-COLOR)] dark:text-gray-300">
              {departureLocation} to {destination}
            </p>
          </div>

          {/* Duration & Departure */}
          <div className="flex items-center justify-between text-sm text-[var(--TEXT-COLOR)] dark:text-gray-400 mb-3">
            <span className="flex items-center gap-2">
              <FaClock className="text-[var(--TEXT-COLOR)]" />
              {duration}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-[var(--HEADING-TITLE-TEXT)]" />
              {departureDate}
            </span>
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-lg font-bold text-[var(--HEADING-TITLE-TEXT)]">
              ৳{price}
            </p>
            <Link
              to={`/allPackages/${_id}`}
              className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidLevelCard;
