import React, { useEffect } from 'react';
import { Link } from 'react-router'; 
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedCard = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 120, easing: 'ease-in-out' });
  }, []);

  const {
    _id,
    departureLocation,
    destination,
    imageUrl,
    duration,
    departureDate,
    price,
    tourName
  } = data;

  return (
    <div className="dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300" data-aos="fade-up">
      <img src={imageUrl} alt={tourName} className="w-full h-48 object-cover" />

      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-[var(--HEADING-TITLE-TEXT)] dark:text-green-300 mb-2">
          {tourName}
        </h3>

        {/* Route Info */}
        <div className="flex items-center gap-3 mb-3">
          <p className="text-sm font-medium text-[var(--TEXT-COLOR)]">
            {departureLocation} to {destination}
          </p>
        </div>

        {/* Duration & Departure */}
        <div className="flex items-center justify-between text-sm mb-3">
          <span className="flex items-center gap-2 text-[var(--TEXT-COLOR)]">
            <FaClock className="text-[var(--TEXT-COLOR)]" />
            {duration}
          </span>
          <span className="flex items-center gap-2 text-[var(--TEXT-COLOR)]">
            <FaCalendarAlt className="text-[var(--HEADING-TITLE-TEXT)]" />
            {departureDate}
          </span>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-[var(--HEADING-TITLE-TEXT)]">৳{price}</p>
          <Link
            to={`/allPackages/${_id}`}
            className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
