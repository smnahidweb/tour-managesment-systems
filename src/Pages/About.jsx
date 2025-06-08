import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiShield, FiUsers } from 'react-icons/fi';
import { FaHeadset, FaRegHandshake, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

const About = () => {
    const aboutImg = 'https://i.ibb.co/TBDdDQYB/tour8.jpg'
    return (
        
    <section className="bg-white dark:bg-gray-900 py-20 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={aboutImg} // Replace with your own
            alt="Travel the world"
            className="rounded-2xl shadow-xl w-full"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Discover the World with <span className="text-green-600">TourNest</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            TourNest is your all-in-one platform for seamless travel experiences—from finding your next adventure
            to managing every step of your tour booking. We bring passion, technology, and trust together to make your journey unforgettable.
          </p>

          {/* Feature Icons */}
          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            <div className="flex items-start gap-3">
              <FiMapPin className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Explore Destinations</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Top tours across the globe at your fingertips.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaRegHandshake className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Tour Provider Friendly</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Add & manage your own packages easily.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FiShield className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">Secure Booking</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Your data & payments are always safe.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaHeadset className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">24/7 Support</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Real-time help during every stage of travel.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 border-t pt-12 text-center space-y-6"
      >
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white">Get in Touch</h3>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have questions, need help with a booking, or just want to say hello—reach out anytime.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10 text-left max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <FiMapPin className="text-green-600 text-2xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">Office Address</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">123 Tour Street, Dhaka 1212, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaPhoneAlt className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">Phone & Email</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">+08801731640634</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">info@tournest.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FaClock className="text-green-600 text-xl mt-1" />
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white">Working Hours</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Saturday – Thursday: 9:00 AM – 7:00 PM</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Friday: Closed</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
    );
};

export default About;