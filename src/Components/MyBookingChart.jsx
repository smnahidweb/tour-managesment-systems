import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

// Triangle shape for bars
const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const MyBookingChart = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axios(`https://booking-management-system-server-si.vercel.app/myBookings?email=${user.email}`)
        .then((res) => setMyBookings(res.data))
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  const data = [
    {
      name: 'Your Totals',
      Bookings: myBookings.length,
    },
  ];

  return (
    <div className="my-6 bg-white p-4 rounded-lg shadow-md border">
      <h3 className="text-xl font-semibold text-center text-green-600 mb-4">
        Booking Overview
      </h3>
      <p className='text-center text-gray-600'>Your Total Bookings: {myBookings.length}</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="Bookings" fill="#16a34a" shape={<TriangleBar />} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBookingChart;
