import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import AllPackages from '../Components/AllPackages';
import { FaEdit, FaTrash } from "react-icons/fa";
const ManageMyPackages = () => {
    const allPackages = useLoaderData();
    console.log(allPackages)
    return (
         <div className="p-6">
      <h2 className="text-2xl font-bold text-green-500 mb-4 text-center">
      Manage Your Added Packages
      </h2>
      <div className="overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-900">
        <table className="min-w-full table-auto text-sm text-left">
          <thead className="bg-green-500 dark:bg-gray-800 text-white dark:text-gray-200 uppercase">
            <tr>
              <th className="px-5 py-3">Tour Name</th>
              <th className="px-5 py-3">Image</th>
              <th className="px-5 py-3">Duration</th>
              <th className="px-5 py-3">Price (৳)</th>
              <th className="px-5 py-3">Route</th>
              <th className="px-5 py-3">Departure</th>
              <th className="px-5 py-3">Guide</th>
              <th className="px-5 py-3">Contact</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 dark:text-gray-100 divide-y divide-gray-200">
            {allPackages.map((pack) => (
              <tr
                key={pack._id}
                className="border-b dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-800 transition duration-150"
              >
                <td className="px-5 py-3 font-medium">{pack.tourName}</td>
                <td className="px-5 py-3">
                  <img
                    src={pack.imageUrl}
                    alt={pack.tourName}
                    className="w-16 h-12 rounded object-cover shadow-sm"
                  />
                </td>
                <td className="px-5 py-3">{pack.duration}</td>
                <td className="px-5 py-3 font-semibold">
                   {pack.price}
                </td>
                <td className="px-5 py-3">
                  {pack.departureLocation} to {pack.destination}
                </td>
                <td className="px-5 py-3">{pack.departureDate}</td>
                <td className="px-5 py-3 flex items-center gap-2">
                  <img
                    src={pack.guidePhoto}
                    alt={pack.guideName}
                    className="w-8 h-8 rounded-full object-cover border"
                  />
                  <div>
                    <p className="font-medium">{pack.guideName}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {pack.guideEmail}
                    </p>
                  </div>
                </td>
                <td className="px-5 py-3">{pack.contactNo}</td>
                <td className="px-5 py-3 flex gap-3">
                
                 <NavLink to={`/update/${pack._id}`}>
                    <button
                    
                    title="Edit Package"
                    className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
                  >
                    <FaEdit size={20} />
                  </button>
                 </NavLink>


                  <button
                  
                    title="Delete Package"
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <FaTrash size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageMyPackages;