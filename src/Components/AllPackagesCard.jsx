import React from 'react';
import { Link } from 'react-router';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';
const AllPackagesCard = ({pack}) => {
    const{

          _id,
     departureLocation,
     destination,
    imageUrl,
    guideName,
    guidePhoto,
    duration,
    departureDate,
    price

    } = pack;
    return (
         <div>
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img
                src={imageUrl}
                
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
                 {pack.tourName}
                </h3>
        
                {/* Guide Info */}
                <div className="flex items-center gap-3 mb-3">
                  
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                   {departureLocation} to {destination}
                  </p>
                </div>
        
                 <div className="flex items-center gap-3 mb-3">
                  <img
                    src={guidePhoto}
                    alt={guideName}
                    className="w-10 h-10 rounded-full border"
                  />
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                    {guideName}
                  </p>
                </div>
        
                {/* Duration & Departure */}
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-2">
                    <FaClock className="text-green-600" />
                    {duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-green-600" />
                    {departureDate}
                  </span>
                </div>
        
                {/* Price & Button */}
                <div className="flex items-center justify-between mt-4">
                  <p className="text-lg font-bold text-green-600">
                    ৳{price}
                  </p>
                  <Link
                    to={`/package/${_id}`}
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

export default AllPackagesCard;