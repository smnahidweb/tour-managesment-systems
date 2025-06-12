import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import AllPackagesCard from './AllPackagesCard';
import { FiSearch } from "react-icons/fi";

const AllPackages = () => {
    const loadedData = useLoaderData();

    const packagesArray = Array.isArray(loadedData) ? loadedData : loadedData?.data || [];

    const [tours, setTours] = useState([]);
    const [keyword, setKeyword] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const convertedKeyword = keyword.toLowerCase();

        const result = packagesArray.filter(tour =>
            tour.destination?.toLowerCase().includes(convertedKeyword) ||
            tour.tourName?.toLowerCase().includes(convertedKeyword)
        );
        setTours(result);
    };

    // 🔁 Optional: reset search results if keyword is cleared
    useEffect(() => {
        if (!keyword) {
            setTours([]);
        }
    }, [keyword]);

    const dataToShow = tours.length > 0 ? tours : packagesArray;

    return (
        <div>
            {/* Search Bar */}
            <div className="w-full flex justify-end px-4">
                <form onSubmit={handleSearch} className="relative mt-4 w-full max-w-sm flex">
                    <div className="relative w-full">
                        <input
                            type="text"
                            onChange={(e) => setKeyword(e.target.value)}
                            name="search"
                            placeholder="e.g., Cox Adventure"
                            className="w-full pl-10 pr-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 
                              bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 
                              placeholder-gray-400 dark:placeholder-gray-500 
                              focus:outline-none focus:ring-1 focus:ring-green-600 transition-all duration-300"
                        />
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-lg" />
                    </div>

                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg transition duration-300"
                    >
                        Search
                    </button>
                </form>
            </div>

            {/* Title */}
            <div className="text-center my-12 px-4 max-w-3xl mx-auto">
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
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 px-4'>
                    {
                        dataToShow.map(pack => (
                            <AllPackagesCard key={pack._id} pack={pack} />
                        ))
                    }
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
