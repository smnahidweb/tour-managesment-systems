import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {
  const logo = 'https://i.ibb.co/pjzbmxcf/tour.jpg';
  const {user,Logout} = useContext(AuthContext)
const handleSignOut = ()=>{
    Logout().then(()=>{
 
      Swal.fire({
            title: `Hi,${user.email} LogOut Successfully`,
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
      <div className="navbar-end flex items-center gap-4 pr-4">
        {
          user?<NavLink to="">
          <button onClick={handleSignOut} className="btn btn-sm bg-green-600 text-white">Log out</button>
        </NavLink> : <NavLink to="/login">
          <button className="btn btn-sm bg-green-600 text-white">Log in</button>
        </NavLink>
        }
      </div>
    </div>
  );
};

export default Navbar;
