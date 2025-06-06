// MyBooking.jsx
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/myBookings?email=${user.email}`)
        .then((res) => setBookings(res.data));
        
    }
    
  }, [user]);
  console.log(bookings)

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
                <th className="px-4 py-3">Special Note</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-800">
              {bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{booking.tourName}</td>
                  <td className="px-4 py-3">{booking?.buyerName}</td>
                  <td className="px-4 py-3">{booking.contactNo}</td>
                  <td className="px-4 py-3">{booking.departureDate}</td>
                  <td className="px-4 py-3">{booking.departureLocation}</td>
                  <td className="px-4 py-3">{booking.destination}</td>
                  <td className="px-4 py-3">{booking.specialNote || "—"}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        booking.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {booking.status || "pending"}
                    </span>
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
