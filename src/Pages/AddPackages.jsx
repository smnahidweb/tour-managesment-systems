import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const AddPackages = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const imgbbKey = import.meta.env.VITE_Image_DB;

  const handleAddPackages = async (e) => {
    e.preventDefault();
    const form = e.target;

    const imageFile = form.imageFile.files[0];

    if (!imageFile) {
      Swal.fire('Error', 'Please select an image file', 'error');
      return;
    }

    try {
      // Upload image to imgbb
      const formData = new FormData();
      formData.append('image', imageFile);

      const imgRes = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
        formData
      );

      const imageUrl = imgRes.data.data.url;

      // Now prepare your full package data
      const newPackage = {
        tourName: form.tourName.value,
        imageUrl,
        duration: form.duration.value,
        price: parseFloat(form.price.value),
        departureLocation: form.departureLocation.value,
        destination: form.destination.value,
        departureDate: form.departureDate.value,
        contactNo: form.contactNo.value,
        guideName: user?.displayName || form.guideName.value,
        guidePhoto: user?.photoURL || '',
        guideEmail: user?.email,
        packageDetails: form.packageDetails.value,
      };

      // Send to backend
      const res = await axios.post(
        'https://booking-management-system-server-si.vercel.app/allPackages',
        newPackage,
        {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        }
      );

      if (res.data.insertedId) {
        Swal.fire({
          title: 'Package added successfully!',
          icon: 'success',
        });
        navigate('/managePackages');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('Error', 'Failed to add package', 'error');
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-[var(--HEADING-TITLE-TEXT)]">
        Add New Tour Package
      </h2>

      <form
        onSubmit={handleAddPackages}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base"
      >
        {/* Tour Name */}
        <div>
          <label className="block mb-1 font-semibold">Tour Name</label>
          <input
            name="tourName"
            type="text"
            placeholder="e.g., Sundarbans Adventure"
            required
            className="w-full p-3 border rounded-md dark:bg-gray-800"
          />
        </div>

        {/* Image File */}
        <div>
          <label className="block mb-1 font-semibold">Tour Image File</label>
          <input
            name="imageFile"
            type="file"
            accept="image/*"
            required
            className="w-full p-2 cursor-pointer border rounded-md dark:bg-gray-800"
          />
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-1 font-semibold">Duration</label>
          <input
            name="duration"
            type="text"
            required
            placeholder="e.g., 3 Days 2 Nights"
            className="w-full p-3 border rounded-md dark:bg-gray-800"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-semibold">Price (BDT)</label>
          <input
            name="price"
            type="number"
            required
            placeholder="e.g., 4999"
            className="w-full p-3 border rounded-md dark:bg-gray-800"
          />
        </div>

        {/* Departure Location */}
        <div>
          <label className="block mb-1 font-semibold">Departure Location</label>
          <input
            name="departureLocation"
            type="text"
            required
            placeholder="e.g., Dhaka"
            className="w-full p-3 border rounded-md dark:bg-gray-800"
          />
        </div>

        {/* Destination */}
        <div>
          <label className="block mb-1 font-semibold">Destination</label>
          <input
            name="destination"
            type="text"
            required
            placeholder="e.g., Cox’s Bazar"
            className="w-full p-3 border rounded-md dark:bg-gray-800"
          />
        </div>

        {/* Departure Date */}
        <div>
          <label className="block mb-1 font-semibold">Departure Date</label>
          <input
            name="departureDate"
            type="date"
            required
            className="w-full p-3 border rounded-md dark:bg-gray-800"
          />
        </div>

        {/* Contact No. */}
        <div>
          <label className="block mb-1 font-semibold">Contact No.</label>
          <input
            name="contactNo"
            type="text"
            required
            placeholder="e.g., +8801XXXXXXXXX"
            className="w-full p-3 border rounded-md dark:bg-gray-800"
          />
        </div>

        {/* Guide Name */}
        <div>
          <label className="block mb-1 font-semibold">Guide Name</label>
          <input
            name="guideName"
            defaultValue={user?.displayName || ''}
            type="text"
            placeholder="Full name of the guide"
            className="w-full p-3 border rounded-md dark:bg-gray-800"
          />
        </div>

        {/* Guide Email */}
        <div>
          <label className="block mb-1 font-semibold">Guide Email</label>
          <input
            name="guideEmail"
            type="email"
            defaultValue={user?.email}
            readOnly
            className="w-full p-3 border rounded-md dark:bg-gray-800"
          />
        </div>

        {/* Details */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-semibold">Package Details</label>
          <textarea
            name="packageDetails"
            rows="5"
            required
            placeholder="Write a detailed description of the package..."
            className="w-full p-3 border rounded-md dark:bg-gray-800"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-green-600 w-full cursor-pointer text-white font-semibold px-10 py-3 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Submit Package
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPackages;
