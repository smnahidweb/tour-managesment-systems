// MyBooking.jsx
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Components/Loading';
import { NavLink } from 'react-router';

const MyBooking = () => {
  const { user ,loading} = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [BookingName,setBookingName] = useState(false)

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/myBookings?email=${user.email}`)
        .then((res) => setBookings(res.data));
        
    }
    
  }, [user]);
  if(loading){
  return <Loading></Loading>
}
const handleStatusUpdate = (bookingId) => {
  console.log('Updating booking:', bookingId);

  
  axios
    .patch(`http://localhost:3000/bookings/${bookingId}`, { status: 'Completed' })
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

        // 5. If you need to track this in state (e.g. to disable the button elsewhere):
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



  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-300 shadow-md">
          <table className="min-w-full divide-y divide-gray-200 bg-white text-sm text-left">
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
            <tbody className="divide-y divide-gray-200 text-gray-800">
              {bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-green-100">
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
