import React from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import { NavLink } from 'react-router';

const PackRow = ({ pack, handleDelete }) => {
  return (
    <tr className="border-b dark:border-gray-700 hover:bg-green-100 dark:hover:bg-gray-800 transition duration-150">
      <td className="px-5 py-3 font-medium">{pack.tourName}</td>
      <td className="px-5 py-3">
        <img
          src={pack.imageUrl}
          alt={pack.tourName}
          className="w-16 h-12 rounded object-cover shadow-sm"
        />
      </td>
      <td className="px-5 py-3">{pack.duration}</td>
      <td className="px-5 py-3 font-semibold">{pack.price}</td>
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
          <p className="text-xs text-gray-500 dark:text-gray-400">{pack.guideEmail}</p>
        </div>
      </td>
      <td className="px-5 py-3">{pack.contactNo}</td>
      <td className="px-5 py-3 flex gap-3">
        <NavLink to={`/update/${pack._id}`}>
          <button
            title="Edit Package"
            className="text-green-600 hover:text-blue-800 transition cursor-pointer mr-2"
          >
            <FaEdit size={20} />
          </button>
        </NavLink>
        <button
          onClick={() => handleDelete(pack._id)}
          title="Delete Package"
          className="text-red-600 hover:text-red-800 transition"
        >
          <FaTrash size={20} />
        </button>
      </td>
    </tr>
  );
};

export default PackRow;
