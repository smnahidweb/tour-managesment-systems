import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { MdOutlineAddBox } from "react-icons/md";
import { FiPackage } from "react-icons/fi";
import { FaSignOutAlt, FaStar } from "react-icons/fa";
import { Moon, Sun } from 'lucide-react';
import Swal from 'sweetalert2';
const Navbar = () => {
  const logo = 'https://i.ibb.co/YFn9CvwS/logo2.jpg';
  const {user,Logout} = useContext(AuthContext)
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

const handleSignOut = ()=>{
    Logout().then(()=>{
 
      Swal.fire({
            title: `Hi,${user?.displayName} LogOut Successfully`,
            icon: "success",
            draggable: true
          });

    })
  }
  const links = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/allPackages">All Packages</NavLink></li>
      {
      user ? <li><NavLink to="/myBooking">My Booking</NavLink></li>:''
      }
      <li><NavLink to="/aboutUs">About Us</NavLink></li>
      <li><NavLink to="/register">Register</NavLink></li>

    </>
  );
  

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        {/* Logo and Brand Name */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10 h-10 rounded-full hidden md:block" />
          <NavLink to="/" className="text-2xl font-bold text-green-600">TourNest</NavLink>
        </div>
      </div>

      {/* Navbar Center - Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-green-700 font-medium">
          {links}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-4 pr-4 ">



<label className="cursor-pointer w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center px-1 relative">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={handleThemeToggle}
            className="sr-only"
          />
          <div
            className={`absolute w-6 h-6 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-transform duration-300 ${
              theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
            }`}
          />
          <div className="absolute left-1 text-gray-600 dark:text-white">
            <Sun size={16} />
          </div>
          <div className="absolute right-1 text-gray-600 dark:text-yellow-300">
            <Moon size={16} />
          </div>
        </label>


        {
          user && <>
          
       <div className="relative">
            <img
              onClick={() => setOpenDropdown(!openDropdown)}
              src={user.photoURL || "https://i.ibb.co/YTNF3nY/user.png"}
              alt="profile"
              className="w-10 h-10 rounded-full border-2 border-green-500 cursor-pointer"
            />
            {openDropdown && (
              <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 shadow-lg border-green-500 rounded-lg z-50 p-4 space-y-2">
                <p className="font-semibold text-gray-800 dark:text-white">{user.displayName}</p>
                <hr className='text-green-700' />
                <NavLink
                  to="/addPackage"
                  className="flex items-center gap-2 text-sm text-green-700 hover:text-green-900"
                >
                  <MdOutlineAddBox /> Add Package
                </NavLink>
                <NavLink
                  to="/managePackages"
                  className="flex items-center gap-2 text-sm text-green-700 hover:text-green-900"
                >
                  <FiPackage /> Manage My Packages
                </NavLink>
                {/* <NavLink to={'/reviews'}>
                  <button  className="flex items-center mt-2 mb-2 gap-2 cursor-pointer text-sm text-green-700 hover:text-green-900">
                  <FaStar/>  Add Reviews
                  </button>
        
                </NavLink> */}
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 btn text-sm text-red-600 hover:text-red-800"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
          
          </> 
        }
        {
          !user && <NavLink to={'/login'}>
          <button className='btn bg-green-600 text-white'>Log in</button>
        </NavLink>
        }
      </div>
    </div>
  );
};

export default Navbar;
