import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import {
  FaSignOutAlt,
  FaHome,
  FaThList,
  FaFire,
  FaAddressCard,
  FaUserPlus,
  FaSignInAlt,
  FaTicketAlt,
  FaCaretDown
} from 'react-icons/fa';
import { MdOutlineAddBox } from "react-icons/md";
import { FiPackage } from 'react-icons/fi';
import { Moon, Sun } from 'lucide-react';
import Swal from 'sweetalert2';

const Navbar = () => {
  const logo = 'https://i.ibb.co/YFn9CvwS/logo2.jpg';
  const { user, Logout } = useContext(AuthContext);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark'
  );

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  const handleSignOut = () => {
    Logout().then(() => {
      Swal.fire({
        title: `Hi, ${user?.displayName} LogOut Successfully`,
        icon: 'success',
        draggable: true
      });
      setOpenDropdown(false);
    });
  };

  const links = (
    <>
      <li className="text-white text-sm font-semibold">
        <NavLink to="/" className="flex items-center gap-1">
          <FaHome size={14} /> Home
        </NavLink>
      </li>
    
      <li className="text-white text-sm font-semibold">
        <NavLink to="/popular-tour" className="flex items-center gap-1">
          <FaFire size={14} /> Popular Tour
        </NavLink>
      </li>

       {
        user && (

            <li className="text-white text-sm font-semibold">
        <NavLink to="/allPackages" className="flex items-center gap-1">
          <FaThList size={14} /> All Packages
        </NavLink>
      </li>
        )
       }


      {user && (

        
        <li className="text-white text-sm font-semibold">
          <NavLink to="/myBooking" className="flex items-center gap-1">
            <FaTicketAlt size={14} /> My Booking
          </NavLink>
        </li>
      )}
      <li className="text-white text-sm font-semibold">
        <NavLink to="/aboutUs" className="flex items-center gap-1">
          <FaAddressCard size={14} /> About Us
        </NavLink>
      </li>
      <li className="text-white text-sm font-semibold">
        <NavLink to="/register" className="flex items-center gap-1">
          <FaUserPlus size={14} /> Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-green-500 shadow-md px-4 md:px-8 min-h-[60px] overflow-visible">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-green-500 rounded-box w-44">
            {links}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 h-8 rounded-full hidden md:block" />
          <p className="text-md font-semibold text-white">TourNest</p>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3 relative">
        {/* Theme Switch */}
        <label className="relative w-14 h-8 rounded-full bg-white dark:bg-gray-800 shadow-inner border-2 border-white dark:border-green-500 flex items-center px-1 transition-colors duration-300">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={handleThemeToggle}
            className="sr-only peer"
          />
          <div className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-green-500 dark:bg-yellow-400 shadow-md transform transition-transform duration-300 peer-checked:translate-x-6" />
          <div className="z-10 text-yellow-500 dark:text-gray-200 ml-1">
            <Sun size={14} />
          </div>
          <div className="ml-auto z-10 text-gray-300 dark:text-yellow-300 mr-1">
            <Moon size={14} />
          </div>
        </label>

        {/* User Info */}
        {user ? (
          <div className="relative" style={{ zIndex: 1000 }}>
            <div
              className="flex items-center cursor-pointer select-none"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <img
                src={user.photoURL || "https://i.ibb.co/YTNF3nY/user.png"}
                alt="profile"
                className="w-9 h-9 rounded-full border-2 border-white"
              />
              <FaCaretDown
                className={`ml-1 text-white transition-transform duration-300 ${
                  openDropdown ? 'rotate-180' : ''
                }`}
                size={14}
              />
            </div>

            {openDropdown && (
              <div
                className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg border border-green-500 rounded-lg p-4 space-y-2"
                style={{ top: 'calc(100% + 0.5rem)', zIndex: 1000 }}
              >
                <p className="font-semibold text-gray-800 dark:text-white">{user.displayName}</p>
                <hr className="text-green-600" />
                <NavLink
                  to="/addPackage"
                  className="flex items-center gap-2 text-sm text-green-500 hover:text-green-700"
                  onClick={() => setOpenDropdown(false)}
                >
                  <MdOutlineAddBox /> Add Package
                </NavLink>
                <NavLink
                  to="/managePackages"
                  className="flex items-center gap-2 text-sm text-green-500 hover:text-green-700"
                  onClick={() => setOpenDropdown(false)}
                >
                  <FiPackage /> Manage My Packages
                </NavLink>
                <button
                  onClick={handleSignOut}
                  className="flex cursor-pointer items-center gap-2 text-sm text-red-600 hover:text-red-800"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <NavLink to="/login">
            <button className="btn btn-sm bg-white text-black flex items-center gap-1 px-3 py-1">
              <FaSignInAlt /> Log in
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
