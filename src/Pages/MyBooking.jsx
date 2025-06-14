
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';
import { NavLink } from 'react-router';

import 'aos/dist/aos.css';
import AOS from 'aos';
const MyBooking = () => {
   useEffect(() => {
                    AOS.init({
                      duration: 1000,
                      once: true,
                      offset: 120,          
                      easing: 'ease-in-out' 
                    });
                  }, []);
  const { user ,loading} = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [BookingName,setBookingName] = useState(false)
  const [dataLoading, setDataLoading] = useState(true);
 
 console.log('Access Token', user.accessToken)

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://booking-management-system-server-si.vercel.app/myBookings?email=${user.email}`,{
          headers:{
            authorization:`Bearer ${user?.accessToken}`
          }
        })
        .then((res) => {
          setBookings(res.data)
          setDataLoading(false)
        });
        
    }
    
  }, [user]);
 
const handleStatusUpdate = (bookingId) => {
  console.log('Updating booking:', bookingId);

  
  axios
    .patch(`https://booking-management-system-server-si.vercel.app/bookings/${bookingId}`, { status: 'Completed' },{
      headers:{
          authorization:`Bearer ${user?.accessToken}`

      }
    })
    .then((result) => {
     
      if (result.data.modifiedCount) {
   
        setBookings((previousBookings) => {
          return previousBookings.map((book) => {
            if (book._id === bookingId) {
              return {
                ...book,
                status: 'Completed',
              };
            }
            return book;
          });
        });

      
        Swal.fire({
          title: 'Booking Completed!',
          text: 'Congratulations! Your pending booking has been successfully marked as completed. We look forward to seeing you on the tour day!',
          icon: 'success',
          confirmButtonText: 'Okay',
          confirmButtonColor: '#16a34a',
        });

      
        setBookingName(true);
      } else {
       
        Swal.fire('Notice', 'This booking was already completed.', 'info');
      }
    })
    .catch((error) => {
      console.error('Update failed:', error);
      Swal.fire('Error', 'Could not update booking.', 'error');
    });
};
 if(loading || dataLoading){
  return <Loading></Loading>
}
 


  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto" data-aos="fade-up">
      <div className="text-center my-12 px-4 max-w-2xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--HEADING-TITLE-TEXT)] mt-2 mb-4">
    My Bookings
  </h2>
  <p className="text-lg text-[var(--TEXT-COLOR)] font-medium mb-1">
    Your Travel Plans in One Place
  </p>
  
</div>

      {/* <div>
        <MyBookingChart></MyBookingChart>
      </div> */}

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No Booking Yet</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md" data-aos="fade-up">
          <table className="min-w-full divide-y divide-gray-200  text-sm text-left">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="px-4 py-3">Tour Name</th>
                <th className="px-4 py-3">Guide Name</th>
                <th className="px-4 py-3">Guide Contact</th>
                <th className="px-4 py-3">Departure Date</th>
                <th className="px-4 py-3">From</th>
                <th className="px-4 py-3">To</th>
                <th className="px-4 py-3 hidden md:block lg:block">Special Note</th>
                 <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Book Now</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-[var(--TEXT-COLOR)]">
              {bookings.map((booking) => (
                <tr key={booking._id} className="">
                  <td className="px-4 py-3 font-medium">{booking.tourName}</td>
                  <td className="px-4 py-3">{booking?.buyerName}</td>
                  <td className="px-4 py-3">{booking.contactNo}</td>
                  <td className="px-4 py-3">{booking.departureDate}</td>
                  <td className="px-4 py-3">{booking.departureLocation}</td>
                  <td className="px-4 py-3">{booking.destination}</td>
                  <td className="px-4 py-3 hidden md:block lg:block">{booking.specialNote || "—"}</td>
                  <td className="px-4 py-3">{booking.status}</td>
                  <td className="px-4 py-3">
                  <button
        onClick={() => handleStatusUpdate(booking._id)}
        disabled={booking.status === 'Completed'}
        className={
          booking.status === 'Completed'
            ? 'bg-gray-400 text-white px-5 py-2 rounded-md shadow-md cursor-not-allowed'
            : 'bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 transition-all duration-300 text-white px-5 py-2 rounded-md shadow-md btn'
        }
      >
        {booking.status === 'Completed' ? 'Confirmed' : 'Confirm'}
      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBooking;
