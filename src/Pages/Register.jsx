import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import Lottie from "lottie-react";
import registerAnimation from "../assets/lottie/register.json";
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { getAuth } from 'firebase/auth';

const Register = () => {
    const { CreateUser, UpdateProfileInfo, setUser ,user} = useContext(AuthContext);
    const[passError,setPassError] = useState('')
    const navigate = useNavigate();
      const auth = getAuth();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log({ name, email, photo, password });
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      setPassError(
        'Password must be at least 6 characters, include uppercase and lowercase letters.'
      );
      return;
    }


    CreateUser(email, password)
      .then(() => {
        return UpdateProfileInfo({
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        // Set user using latest Firebase currentUser
        const currentUser = auth.currentUser;
        setUser({ ...currentUser });
        console.log(user)

        Swal.fire({
          title: `Congratulations Account Created Successfully!`,
          icon: 'success',
          confirmButtonColor: '#16a34a',
          confirmButtonText: 'Continue',
        });

        navigate('/');
      })
      .catch((error) => {
        console.error('Registration Error:', error.message);
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonColor: '#ef4444',
        });
      });
  };
   

  return (
    <div className="min-h-screen flex items-center justify-center">
        

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden bg-white dark:bg-gray-800">
     
        {/* Left: Lottie Animation */}
        <div className="hidden md:flex items-center justify-center  p-10">
          <Lottie animationData={registerAnimation} loop autoplay style={{ height: 400 }} />
        </div>
   
        {/* Right: Register Form */}
        <div className="p-8 sm:p-12">
         <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-6 text-center">Create an Account</h2>
          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Photo URL</label>
              <input
                type="url"
                name="photo"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
                placeholder="https://example.com/photo.jpg"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-900 dark:text-white"
                placeholder="••••••••"
                required
              />
            </div>
            {passError && <p className="text-red-500 text-sm mt-2">{passError}</p>}


            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              Register
            </button>
          </form>

          {/* Redirect to Login */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-6">
            Have an Account?{' '}
            <NavLink className="text-green-600 hover:underline font-medium" to="/login">
              Log in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
