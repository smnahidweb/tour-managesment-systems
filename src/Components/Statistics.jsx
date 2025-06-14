import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import { FaBoxOpen, FaCheckCircle, FaClock } from "react-icons/fa";
import 'aos/dist/aos.css';
import AOS from 'aos';
const Statistics = () => {
     useEffect(() => {
                          AOS.init({
                            duration: 1000,
                            once: true,
                            offset: 120,          
                            easing: 'ease-in-out' 
                          });
                        }, []);
  const [allPackages, setAllPackages] = useState([]);
  const [myBookings, setMyBookings] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookingsRes = await axios('https://booking-management-system-server-si.vercel.app/bookingsCount');
        const packagesRes = await axios('https://booking-management-system-server-si.vercel.app/allPackages');

        setMyBookings(bookingsRes.data.total);
        setAllPackages(packagesRes.data);
        setLoading(false); // All data loaded
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const stats = [
    {
      label: "Total Tour Packages",
      value: allPackages.length,
      icon: <FaBoxOpen />,
      bg: "from-green-400 to-green-500",
    },
    {
      label: "Total Bookings",
      value: myBookings,
      icon: <FaCheckCircle />,
      bg: "from-green-400 to-green-500",
    },
    {
      label: "Years of Service",
      value: 15,
      icon: <FaClock />,
      bg: "from-green-400 to-green-500",
    },
  ];

  return (
    <section className="py-16" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center font-extrabold text-[var(--HEADING-TITLE-TEXT)] mb-6">
          Highlights of TourNest
        </h2>
        <p className="text-center text-[var(--TEXT-COLOR)] mb-12 max-w-2xl mx-auto">
          Discover our performance metrics and the trust our users have in our travel platform.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {!loading &&
            stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${stat.bg} text-white rounded-xl shadow-xl p-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <h3 className="text-4xl font-extrabold">
                    <CountUp
                      end={stat.value}
                      duration={2}
                      enableScrollSpy
                      scrollSpyDelay={100}
                    />+
                  </h3>
                  <p className="mt-2 text-white/90">{stat.label}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
