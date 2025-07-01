import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AllPackagesCard from './AllPackagesCard';
import { FiSearch } from "react-icons/fi";
import 'aos/dist/aos.css';
import AOS from 'aos';

// Skeleton loader card component
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

const AllPackages = () => {
  const loadedData = useLoaderData();

  // Support both array or object with data property
  const packagesArray = Array.isArray(loadedData) ? loadedData : loadedData?.data || [];

  const [tours, setTours] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-in-out'
    });

    // Simulate loading delay (replace with your actual data fetching logic if needed)
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const convertedKeyword = keyword.toLowerCase();

    const result = packagesArray.filter(tour =>
      tour.destination?.toLowerCase().includes(convertedKeyword) ||
      tour.tourName?.toLowerCase().includes(convertedKeyword)
    );
    setTours(result);
  };

  useEffect(() => {
    if (!keyword) {
      setTours([]);
    }
  }, [keyword]);

  const dataToShow = tours.length > 0 ? tours : packagesArray;

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Search Bar */}
      <div className="w-full flex justify-end px-4" data-aos="fade-up">
        <form onSubmit={handleSearch} className="relative mt-4 w-full max-w-sm flex">
          <div className="relative w-full">
            <input
              type="text"
              onChange={(e) => setKeyword(e.target.value)}
              name="search"
              placeholder="e.g., Saint Martin"
              className="w-full pl-10 pr-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 
                bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 
                placeholder-gray-400 dark:placeholder-gray-500 
                focus:outline-none focus:ring-1 focus:ring-green-600 transition-all duration-300"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg" />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg transition cursor-pointer duration-300"
          >
            Search
          </button>
        </form>
      </div>

      {/* Title */}
      <div className="text-center my-12 px-4 max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-[var(--HEADING-TITLE-TEXT)] mb-2">
          Browse All Tour Packages
        </h2>
        <p className="text-xl text-[var(--TEXT-COLOR)] dark:text-gray-300 font-medium mb-2">
          A journey for every dream and destination.
        </p>
        <p className="text-[var(--TEXT-COLOR)] dark:text-gray-400 text-sm md:text-base">
          Discover all our travel packages crafted with care — whether you seek mountains, beaches, or cultural escapes. There's something special waiting for everyone.
        </p>
      </div>

      {/* Grid Display or Message */}
      {Array.isArray(dataToShow) && dataToShow.length > 0 ? (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12 px-4'>
          {dataToShow.map(pack => (
            <AllPackagesCard key={pack._id} pack={pack} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400 mb-16">
          <p className="text-xl">No tour packages found!</p>
        </div>
      )}
    </div>
  );
};

export default AllPackages;
