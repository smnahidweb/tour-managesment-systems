

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { FaClock, FaCalendarAlt, FaUsers, FaPercent, FaTags } from 'react-icons/fa';

const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden animate-pulse p-4 h-full flex flex-col">
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
    <div className="flex justify-between mt-auto">
      <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
      <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
    </div>
  </div>
);

const Popular = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios('https://booking-management-system-server-si.vercel.app/popularTours')
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
    return (
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-600 dark:text-green-400">
          Top 10 Most Visited Tours
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      {/* Promotional Banner */}
      <div className="w-full bg-green-50 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-xl p-3 mb-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2 text-sm sm:text-base text-green-800 dark:text-green-200 font-semibold">
          <FaPercent className="text-lg sm:text-xl" />
          <span>Limited Time Offer: Save up to 25% on Popular Packages!</span>
        </div>
        <Link
          to="/allPackages"
          className="text-sm bg-green-600 text-white px-3 py-1.5 rounded-full hover:bg-green-700 transition"
        >
          Explore Now
        </Link>
      </div>

      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-center mb-10 text-green-600 dark:text-green-400">
        Top 10 Most Visited Tours
      </h2>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
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
            bookingCount
          } = pack;

          return (
            <div key={_id} className="relative h-full">
              {/* Badge */}
              <span className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full z-10 shadow-md">
                Popular Tour
              </span>

              <div className=" dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
                <img
                  src={imageUrl}
                  alt={tourName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  {/* Title & Booked */}
                  <div className="flex justify-between">
                    <h3 className="text-xl font-semibold text-[var(--HEADING-TITLE-TEXT)] dark:text-green-300 mb-2">
                      {tourName}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-[var(--HEADING-TITLE-TEXT)] dark:text-gray-400 mb-2">
                      <FaUsers className="text-[var(--HEADING-TITLE-TEXT)]" />
                      <span className="font-medium text-[var(--HEADING-TITLE-TEXT)]">{bookingCount}</span> People
                    </div>
                  </div>

                  {/* Route */}
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-sm font-medium text-[var(--TEXT-COLOR)]">
                      {departureLocation} to {destination}
                    </p>
                  </div>

                  {/* Duration & Date */}
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-2 text-[var(--TEXT-COLOR)]">
                      <FaClock className="text-[var(--TEXT-COLOR)]" />
                      {duration}
                    </span>
                    <span className="flex text-[var(--TEXT-COLOR)] items-center gap-2">
                      <FaCalendarAlt className="text-[var( --HEADING-TITLE-TEXT)]" />
                      {departureDate}
                    </span>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-lg font-bold text-[var(--HEADING-TITLE-TEXT)]">৳{price}</p>
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

export default Popular;

