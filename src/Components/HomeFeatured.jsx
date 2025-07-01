import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard';
import { NavLink } from 'react-router';
import 'aos/dist/aos.css';
import AOS from 'aos';

const SkeletonCard = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl p-4 space-y-4 h-[340px]">
      <div className="bg-gray-300 dark:bg-gray-700 h-40 rounded-lg" />
      <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
      <div className="h-3 w-2/3 bg-gray-300 dark:bg-gray-600 rounded" />
      <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-600 rounded" />
    </div>
  );
};

const HomeFeatured = ({ FeaturedPromise }) => {
  const [FeaturedData, setFeaturedData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 120, easing: 'ease-in-out' });

    FeaturedPromise.then(data => {
      setFeaturedData(data);
      setLoading(false);
    });
  }, [FeaturedPromise]);

  const slicedData = FeaturedData.slice(0, 8);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center my-12 max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-2 text-[var(--HEADING-TITLE-TEXT)]">
          Featured Tour Packages
        </h2>
        <p className="text-xl text-[var(--HEADING-TITLE-TEXT)] font-medium mb-2">
          Unforgettable Destinations Curated for You.
        </p>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
          From serene hills to vibrant beaches, our packages offer the perfect mix of adventure, culture, and relaxation.
        </p>
      </div>

      {/* Cards or Skeletons */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mb-12">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : slicedData.map(data => <FeaturedCard key={data._id} data={data} />)}
      </div>

      {/* Button */}
      {!loading && (
        <div className="text-center">
          <NavLink to="/allPackages">
            <button className="bg-green-500 btn-wide mt-8 mb-12 mx-auto flex justify-center text-white rounded-md btn">
              Show All
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default HomeFeatured;
