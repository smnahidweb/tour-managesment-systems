import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddPackages = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    // console.log(user.displayName,user.photoURL)
    const handleAddPackages = (e) =>{
        e.preventDefault();
        const form = e.target;
         const formData = new FormData(form);
         const data = Object.fromEntries(formData.entries());
         console.log(data)
    
         axios.post('https://booking-management-system-server-si.vercel.app/allPackages',data,{

          headers:{
            authorization:`Bearer ${user?.accessToken}`
          }

         })
       .then(res => {
       console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
                        title: "Packages added successfully completed",
                        icon: "success",
                        draggable: true })
                        navigate('/managePackages')
    }
    
})
.catch(error=>{
    console.log(error)
})

    
    }
    return (
        <div>
          <div className="max-w-5xl mx-auto p-8   rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-[var(--HEADING-TITLE-TEXT)] mb-8">
        Add New Tour Package
      </h2>

      <form onSubmit={handleAddPackages} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
        {/* Tour Name */}
        <div>
          <label className="block mb-1 font-semibold">Tour Name</label>
          <input
            name="tourName"
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
            placeholder="e.g., Dhaka"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 transition-all duration-300"
          />
        </div>

        {/* Destination */}
        <div>
          <label className="block mb-1 font-semibold">Destination</label>
          <input
            name="destination"
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
            type="date"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-600 dark:bg-gray-800 dark:border-gray-700 transition-all duration-300"
          />
        </div>

        {/* Contact No. */}
        <div>
          <label className="block mb-1 font-semibold">Contact No.</label>
          <input
            name="contactNo"
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
            defaultValue={user?.displayName}
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
            defaultValue={user?.photoURL}
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
            type="email"
            defaultValue={user?.email}
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
            Submit Package
          </button>
        </div>
      </form>
    </div>
        </div>
    );
};

export default AddPackages;