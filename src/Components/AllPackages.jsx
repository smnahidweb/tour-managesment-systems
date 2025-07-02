import React, { useEffect, useState } from 'react';
import AllPackagesCard from './AllPackagesCard';
import { FiSearch } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const SkeletonCard = () => (
  <div className="dark:bg-gray-900 rounded-2xl shadow-md animate-pulse p-4">
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
  const [packages, setPackages] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    fetchPackages();
  }, [sortBy]);

  const fetchPackages = () => {
    setLoading(true);
    let url = 'https://booking-management-system-server-si.vercel.app/allPackages';
    if (sortBy === 'low-to-high') url += '?sort=asc';
    else if (sortBy === 'high-to-low') url += '?sort=desc';

    axios
      .get(url)
      .then((res) => {
        setPackages(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!keyword) return fetchPackages();

    const filtered = packages.filter((pkg) =>
      pkg.tourName?.toLowerCase().includes(keyword.toLowerCase()) ||
      pkg.destination?.toLowerCase().includes(keyword.toLowerCase())
    );
    setPackages(filtered);
  };

  return (
    <div className=" px-4 sm:px-6 lg:px-8">
      {/* Search & Sort */}
      <div className="flex flex-wrap justify-between items-center gap-4 mt-6 mb-8" data-aos="fade-up">
        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2 px-2 py-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-md shadow-sm"
        >
          <div className="relative w-36">
            <FiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-sm" />
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search"
              className="w-full h-7 pl-7 pr-2 text-[12px] text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-7 px-3 text-[12px] bg-green-600 hover:bg-green-700 text-white rounded-md transition"
          >
            Go
          </button>
        </form>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="h-7 w-36 px-2 text-[12px] border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 focus:outline-none"
        >
          <option value="">Sorted By Price</option>
          <option value="low-to-high">Low → High</option>
          <option value="high-to-low">High → Low</option>
        </select>
      </div>

      {/* Title */}
      <div className="text-center my-10 px-4 max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-[var(--HEADING-TITLE-TEXT)] mb-2">
          Browse All Tour Packages
        </h2>
        <p className="text-xl text-[var(--TEXT-COLOR)] dark:text-gray-300 font-medium mb-2">
          A journey for every dream and destination.
        </p>
        <p className="text-[var(--TEXT-COLOR)] dark:text-gray-400 text-sm md:text-base">
          Discover travel packages crafted with care — whether you seek mountains, beaches, or culture.
        </p>
      </div>

      {/* Grid or Message */}
      {loading ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {[...Array(8)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : packages.length > 0 ? (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {packages.map((pack) => (
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
