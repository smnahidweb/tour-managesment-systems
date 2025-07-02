import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';

const Update = () => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const [tour, setTour] = useState({});
  const [dataLoading, setDataLoading] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios(`https://booking-management-system-server-si.vercel.app/allPackages/${id}`, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`
      }
    })
      .then(res => {
        setTour(res.data);
        setDataLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id, user?.accessToken]);

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setPreviewImage(null);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const imageFile = formData.get('imageFile');

    let imageUrlToUpdate = imageUrl;

    if (imageFile && imageFile.name) {
      const imgFormData = new FormData();
      imgFormData.append('image', imageFile);

      try {
        const imgRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_DB}`,
          imgFormData
        );
        imageUrlToUpdate = imgRes.data.data.url;
      } catch (err) {
        console.error("Image upload failed:", err);
        return Swal.fire("Error", "Image upload failed", "error");
      }
    }

    const updatedData = {
      tourName: formData.get('tourName'),
      imageUrl: imageUrlToUpdate,
      duration: formData.get('duration'),
      price: formData.get('price'),
      departureLocation: formData.get('departureLocation'),
      destination: formData.get('destination'),
      departureDate: formData.get('departureDate'),
      contactNo: formData.get('contactNo'),
      guideName: formData.get('guideName'),
      guidePhoto: formData.get('guidePhoto'),
      guideEmail: formData.get('guideEmail'),
      packageDetails: formData.get('packageDetails')
    };

    axios.put(`https://booking-management-system-server-si.vercel.app/allPackages/${_id}`, updatedData, {
      headers: {
        authorization: `Bearer ${user?.accessToken}`
      }
    })
      .then(res => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Package Updated Successfully",
            icon: "success"
          });
          navigate('/managePackages');
        }
      })
      .catch(err => {
        console.log(err);
        Swal.fire("Error", "Failed to update package", "error");
      });
  };

  if (loading || dataLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-5xl mx-auto p-8 dark:bg-gray-900 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center dark:text-green-300 mb-8 text-[var(--HEADING-TITLE-TEXT)]">
        Update Tour Package
      </h2>

      <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
        <div>
          <label className="block mb-1 font-semibold">Tour Name</label>
          <input
            name="tourName"
            defaultValue={tourName}
            type="text"
            placeholder="e.g., Sundarbans Adventure"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Tour Image</label>
          <input
            name="imageFile"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
          {/* Preview Logic */}
          {previewImage ? (
            <img src={previewImage} alt="New Preview" className="w-24 mt-2 rounded-md shadow-md" />
          ) : (
            imageUrl && <img src={imageUrl} alt="Current" className="w-24 mt-2 rounded-md shadow-md" />
          )}
        </div>

        <div>
          <label className="block mb-1 font-semibold">Duration</label>
          <input
            name="duration"
            defaultValue={duration}
            type="text"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Price (BDT)</label>
          <input
            name="price"
            defaultValue={price}
            type="number"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Departure Location</label>
          <input
            name="departureLocation"
            defaultValue={departureLocation}
            type="text"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Destination</label>
          <input
            name="destination"
            defaultValue={destination}
            type="text"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Departure Date</label>
          <input
            name="departureDate"
            defaultValue={departureDate}
            type="date"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Contact No.</label>
          <input
            name="contactNo"
            defaultValue={contactNo}
            type="text"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Guide Name</label>
          <input
            name="guideName"
            defaultValue={guideName}
            type="text"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Guide Photo URL</label>
          <input
            name="guidePhoto"
            defaultValue={guidePhoto}
            type="text"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Guide Email</label>
          <input
            name="guideEmail"
            defaultValue={guideEmail}
            type="email"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-semibold">Package Details</label>
          <textarea
            name="packageDetails"
            defaultValue={packageDetails}
            rows="5"
            className="w-full p-3 border rounded-md dark:bg-gray-800 dark:border-gray-700"
          ></textarea>
        </div>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition duration-300 w-full"
          >
            Update Package
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
