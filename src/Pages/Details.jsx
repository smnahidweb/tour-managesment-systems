import React from 'react';
import { NavLink, useLoaderData, useNavigate } from 'react-router';
import {
   FaUserFriends,
  FaPhoneAlt,
  FaCalendarAlt,
  FaMoneyBillAlt,
  FaMapMarkedAlt,
  FaPlaneDeparture,
  FaPlaneArrival,
} from 'react-icons/fa';
import axios from 'axios';
import Swal from 'sweetalert2';

const Details = () => {

    const packageData = useLoaderData()
    const {
      _id,
    imageUrl,
    tourName,
    guideName,
    guidePhoto,
    contactNo,
    duration,
    price,
    packageDetails,
    bookingCount,
    departureLocation,
    departureDate,
    destination,

    } = packageData
    console.log(bookingCount)

  
    return (
         <div className="bg-white mt-12 mb-12 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl transition hover:scale-[1.02] duration-300 border border-gray-200 dark:border-gray-700">
      {/* Image Banner */}
      <div className="relative h-[400px]">
        <img
          src={imageUrl}
          alt={tourName}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 w-full">
          <h2 className="text-xl font-bold truncate">{tourName}</h2>
          <p className="text-sm flex items-center gap-2">
            <FaMapMarkedAlt className="text-green-400" />
            {departureLocation} → {destination}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-4">
        {/* Guide Info */}
        <div className="flex items-center gap-4">
          <img
            src={guidePhoto}
            alt={guideName}
            className="w-12 h-12 rounded-full border-2 border-green-500 object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800 dark:text-white flex items-center gap-1">
              <FaUserFriends /> {guideName}
            </p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <FaPhoneAlt /> {contactNo}
            </p>
          </div>
        </div>

        {/* Tour Highlights */}
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
          <p className="flex items-center gap-2">
            <FaCalendarAlt className="text-green-600" /> {duration}
          </p>
          <p className="flex items-center gap-2">
            <FaMoneyBillAlt className="text-green-600" /> BDT {price}
          </p>
          <p className="flex items-center gap-2 col-span-2">
            <FaPlaneDeparture className="text-green-600" /> Departs: {departureDate}
          </p>
          <p className="flex items-center gap-2 col-span-2">
            <FaPlaneArrival className="text-green-600" /> Destination: {destination}
          </p>
          <p className="flex items-center gap-2 col-span-2">
            <FaUserFriends className="text-green-600" /> Booked: {bookingCount || 0} People
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {packageDetails}
        </p>

        {/* Book Now Button */}
        <div className="pt-2">
         <NavLink to={`/booking/${_id}`}>
           <button  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-2 rounded-xl hover:shadow-lg transition">
            Book Now
          </button>
         </NavLink>
        </div>
      </div>
    </div>
    );
};

export default Details;