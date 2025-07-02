import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import Lottie from "lottie-react";
import registerAnimation from "../assets/lottie/register.json";
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { getAuth } from 'firebase/auth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '/logo2.jpg'

const Register = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 120, easing: 'ease-in-out' });
  }, []);

  const { CreateUser, UpdateProfileInfo, setUser } = useContext(AuthContext);
  const [passError, setPassError] = useState('');
  const [imgUploading, setImgUploading] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setPassError('');
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoFile = form.photo.files[0];

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPassError('Password must be at least 6 characters and include both uppercase and lowercase letters.');
      return;
    }

    if (!photoFile) {
      setPassError('Please select a profile photo.');
      return;
    }

    setImgUploading(true);
    const imgData = new FormData();
    imgData.append('image', photoFile);
    const imgbbKey = import.meta.env.VITE_Image_DB;
    let photoURL = '';

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
        method: 'POST',
        body: imgData,
      });
      const imgResult = await res.json();
      photoURL = imgResult.data.url;
    } catch (error) {
      Swal.fire('Image Upload Failed', error.message, 'error');
      setImgUploading(false);
      return;
    }

    setImgUploading(false);

    CreateUser(email, password)
      .then(() => {
        return UpdateProfileInfo({ displayName: name, photoURL });
      })
      .then(() => {
        const currentUser = auth.currentUser;
        setUser({ ...currentUser });

        Swal.fire({
          title: `Congratulations! Account Created`,
          icon: 'success',
          confirmButtonColor: '#16a34a',
        });

        navigate('/');
      })
      .catch((error) => {
        Swal.fire('Error!', error.message, 'error');
      });
  };

  return (
    <div className="min-h-screen flex" data-aos="fade-up">
      {/* Left Side */}
      <div className="w-full md:w-1/2   relative flex items-center justify-center p-10">
        {/* Logo */}
      <NavLink
  to="/"
  className="absolute top-6 left-6 flex items-center gap-2 z-50"
>
  <img src={logo} alt="TourNest Logo" className="h-8 w-auto object-contain" />
  <span className="text-2xl font-extrabold text-green-600">TourNest</span>
</NavLink>


        {/* Lottie */}
        <Lottie animationData={registerAnimation} loop autoplay style={{ height: 400 }} />
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center  dark:bg-gray-800 p-8 sm:p-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-[var(--HEADING-TITLE-TEXT)] mb-6 text-center">
            Create an Account
          </h2>

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-[var(--TEXT-COLOR)] mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[var(--TEXT-COLOR)] mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white focus:ring-green-500"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-[var(--TEXT-COLOR)] mb-1">Profile Photo</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                required
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[var(--TEXT-COLOR)] mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white focus:ring-green-500"
              />
            </div>

            {/* Error Messages */}
            {passError && <p className="text-red-500 text-sm">{passError}</p>}
            {imgUploading && <p className="text-green-600 text-sm">Uploading Image...</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={imgUploading}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
            >
              {imgUploading ? 'Please wait...' : 'Register'}
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-center text-sm text-[var(--TEXT-COLOR)] mt-6">
            Already have an account?{' '}
            <NavLink to="/login" className="text-green-600 hover:underline font-medium">Log in</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
