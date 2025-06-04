import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const logo = 'https://i.ibb.co/pjzbmxcf/tour.jpg';
  return (
    <footer className="bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300 border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo & Tagline */}
        <div >
          <div className='flex gap-2 justify-center items-center'>
            <img className='w-12' src={logo} alt="" /> 
          <h2 className="text-2xl font-bold text-green-600">TourNest</h2>
          </div>
          <p className="mt-2 text-sm">
            Your trusted partner in unforgettable travel experiences.
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Address</h3>
          <p className="text-sm">123 Tour Street</p>
          <p className="text-sm">Dhaka, Bangladesh</p>
          <p className="text-sm">Phone: +880-1731640634</p>
          <p className="text-sm">Email: info@tournest.com</p>
        </div>

        {/* Policies / Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://web.facebook.com/avro.ahmed.nil.2025" target='_blank' aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank' aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://x.com/home" target='_blank'  aria-label="Twitter" className="hover:text-sky-500">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/" target='_blank' aria-label="YouTube" className="hover:text-red-600">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 dark:bg-gray-800 text-center py-4 text-sm mt-6">
        &copy; {new Date().getFullYear()} TourNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
