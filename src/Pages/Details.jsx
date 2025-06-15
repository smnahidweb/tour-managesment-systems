import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useLoaderData, useParams} from 'react-router';
import { motion } from 'framer-motion';
import {
   FaUserFriends,
  FaPhoneAlt,
  FaCalendarAlt,
  FaMoneyBillAlt,
  FaMapMarkedAlt,
  FaPlaneDeparture,
  FaPlaneArrival,
} from 'react-icons/fa';

import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';

const Details = () => {
const{user,loading} = useContext(AuthContext)
const [dataLoading,setDataLoading] = useState(true)

    // const packageData = useLoaderData()
    const [packageData,setPackageData] = useState([])
    const {id} = useParams();
    useEffect( ()=>{
 axios(`https://booking-management-system-server-si.vercel.app/allPackages/${id}`,{
   headers:{
            authorization:`Bearer ${user?.accessToken}`
          }
 })
 .then(result =>{
  setPackageData(result.data)
  setDataLoading(false)
 })
 .catch(error =>{
  console.log(error)
 })
    } ,[id,user?.accessToken])
    console.log(id)

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

if(loading || dataLoading){
   return <Loading></Loading>
}

  
    return (
     <div className="mt-12 mb-12 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl transition hover:scale-[1.02] duration-300 border border-gray-200 dark:border-gray-700">
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
  <div className="p-5 space-y-4 text-[var(--TEXT-COLOR)]">
    {/* Guide Info */}
    <div className="flex items-center gap-4">
      <img
        src={guidePhoto}
        alt={guideName}
        className="w-12 h-12 rounded-full border-2 border-green-500 object-cover"
      />
      <div>
        <p className="text-sm font-semibold flex items-center gap-1 text-[var(--TEXT-COLOR)]">
          <FaUserFriends /> {guideName}
        </p>
        <p className="text-xs flex items-center gap-1 text-[var(--TEXT-COLOR)] opacity-70">
          <FaPhoneAlt /> {contactNo}
        </p>
      </div>
    </div>

    {/* Tour Highlights */}
    <div className="grid grid-cols-2 gap-2 text-sm text-[var(--TEXT-COLOR)]">
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
    <p className="text-sm text-[var(--TEXT-COLOR)] line-clamp-3">
      {packageDetails}
    </p>

    {/* Book Now Button */}
    <div className="pt-2">
      <NavLink to={`/booking/${_id}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:from-green-600 hover:to-teal-600 transition duration-300 w-full"
        >
          Book Now
        </motion.button>
      </NavLink>
    </div>
  </div>
</div>

    );
};

export default Details;