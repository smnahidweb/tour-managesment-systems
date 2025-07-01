import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShortTourscard from './ShortTourscard';

const SkeletonCard = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 animate-pulse rounded-xl p-4 space-y-4 h-[300px]">
      <div className="bg-gray-300 dark:bg-gray-700 h-40 rounded-lg" />
      <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
      <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-600 rounded" />
    </div>
  );
};

const ShorTours = () => {
  const [shortTours, setShortTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios('https://booking-management-system-server-si.vercel.app/tour-short')
      .then(result => {
        setShortTours(result.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="text-center my-12 max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-2 text-[var(--HEADING-TITLE-TEXT)]">
          Short Tours
        </h2>
        <p className="text-xl mb-2">
          Quick getaways lasting 1–2 days — ideal for your weekend refresh!
        </p>
      </div>

      {/* Cards or Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
          : shortTours.map(sTour => <ShortTourscard key={sTour._id} sTour={sTour} />)}
      </div>
    </div>
  );
};

export default ShorTours;
