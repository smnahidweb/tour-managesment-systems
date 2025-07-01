import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { FaClock, FaCalendarAlt, FaUsers } from 'react-icons/fa';

const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden animate-pulse p-4">
    <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-1/2"></div>
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
      </div>
    </div>
    <div className="flex justify-between">
      <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
    </div>
  </div>
);

const PopularTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios('http://localhost:3000/popularTours')
      .then(res => {
        setTours(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    // Show 6 skeleton cards while loading
    return (
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-600 dark:text-green-400">
          Top 10 Most Visited Tours
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-600 dark:text-green-400">
        Top 10 Most Visited Tours
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {tours.map((pack) => {
          const {
            _id,
            imageUrl,
            tourName,
            departureLocation,
            destination,
            duration,
            departureDate,
            price,
            guideName,
            guidePhoto,
            bookingCount
          } = pack;

          return (
            <div key={_id} className="relative">
              {/* Popular Badge */}
              <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md">
                Popular Tour
              </span>

              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300" data-aos="fade-up">
                <img
                  src={imageUrl}
                  alt={tourName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className='flex justify-between'>
                    <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
                      {tourName}
                    </h3>

                    {/* Creative Booked Count */}
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <FaUsers className="text-green-600" />
                      <span className="font-medium">{bookingCount}</span> People
                    </div>
                  </div>

                  {/* Route Info */}
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                      {departureLocation} to {destination}
                    </p>
                  </div>

                  {/* Guide Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={guidePhoto}
                      alt={`Guide: ${guideName}`}
                      className="w-12 h-12 rounded-full border-2 border-green-600 shadow-sm object-cover"
                    />
                    <div>
                      <p className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        {guideName}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Tour Guide
                      </p>
                    </div>
                  </div>

                  {/* Duration & Date */}
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

                  {/* Price & Link */}
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-lg font-bold text-green-600">
                      ৳{price}
                    </p>
                    <Link
                      to={`/allPackages/${_id}`}
                      className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PopularTours;
