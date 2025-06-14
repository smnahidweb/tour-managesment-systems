import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const Update = () => {
  const{user} = useContext(AuthContext)
    const data = useLoaderData();
    const [tour,setTour] = useState([])
    const {id} = useParams();
    useEffect( ()=>{
  axios(`https://booking-management-system-server-si.vercel.app/allPackages/${id}`,{
     headers:{
            authorization:`Bearer ${user?.accessToken}`
          }
  })
  .then(res =>{
    setTour(res.data)
  })
  .catch(error =>{
    console.log(error)
  })
    },[id,user?.accessToken] )
    console.log(data)
    const {
  _id,
  tourName,
  imageUrl,
  duration,
  price,
  departureLocation,
  destination,
  departureDate,
  contactNo,
  guideName,
  guidePhoto,
  guideEmail,
  packageDetails
} = tour;
console.log(data)
 const handleUpdate = (e) =>{
  
    e.preventDefault()

    const form = e.target;
    const formData = new FormData(form);
     const updatedData = Object.fromEntries(formData.entries());
     console.log(updatedData)
    
   axios.put(`https://booking-management-system-server-si.vercel.app/allPackages/${_id}`,updatedData,{
    headers:{
            authorization:`Bearer ${user?.accessToken}`
          }
   })
   .then(res =>{
    console.log(res.data)
    if(res.data.modifiedCount){
                               Swal.fire({
                                title: " Package Updated Successfully",
                                icon: "success",
                                draggable: true })
    }
   })
   .catch(error =>{
    console.log(error)
   })

}
    return (
        <div>
          <div className="max-w-5xl mx-auto p-8  dark:bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center  dark:text-green-300 mb-8 text-[var(--HEADING-TITLE-TEXT)] ">
       Update Tour Package
      </h2>

      <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
        {/* Tour Name */}
        <div>
          <label className="block mb-1 font-semibold">Tour Name</label>
          <input
            name="tourName"
            defaultValue={tourName}
            type="text"
            placeholder="e.g., Sundarbans Adventure"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block mb-1 font-semibold">Tour Image URL</label>
          <input
            name="imageUrl"
            defaultValue={imageUrl}
            type="text"
            placeholder="Paste image URL"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-1 font-semibold">Duration</label>
          <input
            name="duration"
            defaultValue={duration}
            type="text"
            placeholder="e.g., 3 Days 2 Nights"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-semibold">Price (BDT)</label>
          <input
            name="price"
            type="number"
            defaultValue={price}
            placeholder="e.g., 4999"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Departure Location */}
        <div>
          <label className="block mb-1 font-semibold">Departure Location</label>
          <input
            name="departureLocation"
            type="text"
            defaultValue={departureLocation}
            placeholder="e.g., Dhaka"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Destination */}
        <div>
          <label className="block mb-1 font-semibold">Destination</label>
          <input
            name="destination"
            defaultValue={destination}
            type="text"
            placeholder="e.g., Cox’s Bazar"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Departure Date */}
        <div>
          <label className="block mb-1 font-semibold">Departure Date</label>
          <input
            name="departureDate"
            defaultValue={departureDate}
            type="date"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300"
          />
        </div>

        {/* Contact No. */}
        <div>
          <label className="block mb-1 font-semibold">Contact No.</label>
          <input
            name="contactNo"
            defaultValue={contactNo}
            type="text"
            placeholder="e.g., +8801XXXXXXXXX"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Guide Name */}
        <div>
          <label className="block mb-1 font-semibold">Guide Name</label>
          <input
            name="guideName"
            defaultValue={guideName}
            // defaultValue={user?.displayName}
            type="text"
            placeholder="Full name of the guide"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Guide Photo */}
        <div>
          <label className="block mb-1 font-semibold">Guide Photo URL</label>
          <input
            name="guidePhoto"
            defaultValue={guidePhoto}
            // defaultValue={}
            type="text"
            placeholder="Paste image URL"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Guide Email */}
        <div>
          <label className="block mb-1 font-semibold">Guide Email</label>
          <input
            name="guideEmail"
            defaultValue={guideEmail}
            type="email"
            
            placeholder="guide@example.com"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Package Details (Full width) */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-semibold">Package Details</label>
          <textarea
            name="packageDetails"
            rows="5"
            defaultValue={packageDetails}
            placeholder="Write a detailed description of the package..."
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center">
          <button 
            type="submit"
            className="bg-green-600 w-full hover:bg-green-700 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition duration-300"
          >
           Update Package
          </button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default Update;