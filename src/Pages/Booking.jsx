import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const Booking = () => {
    const {user} = useContext(AuthContext)
    // const tour = useLoaderData();
    const [tour,setTour] = useState([]);

  const {id} = useParams()
   useEffect( ()=>{
   axios(`https://booking-management-system-server-si.vercel.app/allPackages/${id}`,{
     headers:{
              authorization:`Bearer ${user?.accessToken}`
            }
   })
   .then(result =>{
    setTour(result.data)
   })
   .catch(error =>{
    console.log(error)
   })
      } ,[id,user?.accessToken])
      const navigate = useNavigate();

    const handleBookCount = (id)=>{
      axios.patch(`https://booking-management-system-server-si.vercel.app/allPackages/${id}/increment`,{
         headers:{
            authorization:`Bearer ${user?.accessToken}`
          }
      })
      .then(res =>{
        console.log(res.data)
      })
      .catch(error =>{
        console.log(error)
      })
    }

    const handleBooking = (e) =>{
         e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const specialNote = formData.get("specialNote");
    const bookingDate = formData.get("bookingDate");

    const bookingData = {
      tourId: tour._id,
      tourName: tour.tourName,
      price: tour.price,
      buyerName: user?.displayName,
      buyerEmail: user?.email,
      bookingDate, 
      specialNote,
      status: "pending",
    

    };
    axios.post('https://booking-management-system-server-si.vercel.app/bookings',bookingData,{
      headers:{
          authorization:`Bearer ${user?.accessToken}`

      }
    })
    .then(res =>{
        console.log(res.data)
         if(res.data.insertedId){
          handleBookCount(tour._id)
                Swal.fire({
                                title: `Congratulation ${user?.displayName} Booking added Successfully`,
                                icon: "success",
                                draggable: true })
             navigate('/myBooking')
            }
    })
    .catch(error =>{
        console.log(error)
    })

    }
    
    return (
       <div>
  <div className=" shadow-lg rounded-2xl p-6 max-w-xl mx-auto">
    <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Book This Tour</h2>
    <form onSubmit={handleBooking} className="space-y-4">

      {/* Tour Name */}
      <div>
        <label className="font-semibold">Tour Package</label>
        <input
          type="text"
          value={tour.tourName}
          
          readOnly
          className="w-full  px-4 py-2 rounded-lg border border-gray-300 
       
            focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-200 transition-all duration-300" 
        />
      </div>

      {/* Price */}
      <div>
        <label className="font-semibold">Price (BDT)</label>
        <input
          type="text"
          value={tour.price}
          readOnly
          className="w-full px-4 py-2 rounded-lg border border-gray-300 
           
            focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-200 transition-all duration-300"
        />
      </div>

      {/* Buyer Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Buyer Name</label>
          <input
            type="text"
            value={user?.displayName}
            readOnly
            className="w-full  px-4 py-2 rounded-lg border border-gray-300 
          
              focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-all duration-300"
          />
        </div>
        <div>
          <label className="font-semibold">Email</label>
          <input
            type="email"
            value={user?.email}
            readOnly
            className="w-full  px-4 py-2 rounded-lg border border-gray-300 
              
              focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-all duration-300"
          />
        </div>
      </div>

      {/* Booking Date */}
      <div>
        <label className="font-semibold">Booking Date</label>
        <input
          type="date"
          name="bookingDate"
          defaultValue={new Date().toISOString().split("T")[0]}
          className="w-full   px-4 py-2 rounded-lg border border-gray-300 
            
            focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-all duration-300"
        />
      </div>

      {/* Special Note */}
      <div>
        <label className="font-semibold">Special Note (optional)</label>
        <textarea
          name="specialNote"
          rows="3"
          placeholder="Write any special request..."
          className="w-full px-4 py-2 border rounded-lg  border-gray-300 
             
            focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600 transition-all duration-300"
        ></textarea>
      </div>

      {/* Submit */}
      <button 
        type="submit" 
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300"
      >
        Book Now
      </button>
    </form>
  </div>
</div>
    );
};

export default Booking;