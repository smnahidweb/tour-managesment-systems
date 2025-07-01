import React, { useContext, useEffect } from 'react';
import Lottie from "lottie-react";
import { FaGoogle } from 'react-icons/fa';
import loginAnimation from "../assets/lottie/login.json";
import { NavLink, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '/logo2.jpg';

const Login = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: 'ease-in-out'
    });
  }, []);

  const { Login, SignInWithGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    Login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        Swal.fire({
          title: `Hi, ${user.displayName || 'User'}!`,
          text: 'Logged in successfully!',
          icon: "success",
          confirmButtonColor: '#16a34a',
        });
        navigate(location.state || '/');
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonColor: '#ef4444',
        });
      });
  };

  const handleLoginWithGoogle = () => {
    SignInWithGoogle()
      .then(result => {
        Swal.fire({
          title: `Hi, ${result.user?.displayName || 'User'}!`,
          text: 'Logged in with Google!',
          icon: "success",
          confirmButtonColor: '#16a34a',
        });
        navigate(location.state || '/');
      })
      .catch(error => {
        Swal.fire('Login Failed', error.message, 'error');
      });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 " data-aos="fade-up">

      {/* Fixed Logo */}
      <NavLink
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 z-50"
      >
        <img src={logo} alt="TourNest Logo" className="h-8 w-auto object-contain" />
        <span className="text-2xl font-extrabold text-green-600">TourNest</span>
      </NavLink>

      {/* Main Container */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2  rounded-3xl overflow-hidden ">
        
        {/* Left: Login Form */}
        <div className="p-8 sm:p-12  dark:bg-gray-900">
          <h2 className="text-3xl font-bold text-green-500  mb-2 mt-4 text-center">Welcome Back</h2>
          <p className="text-center text-lg text-[var(--TEXT-COLOR)] dark:text-gray-300 mb-8">Sign in to your account</p>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[var(--TEXT-COLOR)] mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border rounded-lg  dark:text-white focus:ring-2 focus:ring-green-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[var(--TEXT-COLOR)] mb-1">Password</label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-green-500"
                placeholder="••••••••"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Sign In */}
          <button
            onClick={handleLoginWithGoogle}
            type="button"
            className="w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <FaGoogle size={20} />
            <span className="text-[var(--TEXT-COLOR)] font-medium">Continue with Google</span>
          </button>

          {/* Redirect to Register */}
          <p className="text-center text-sm text-[var(--TEXT-COLOR)] mt-6 dark:text-gray-400">
            Don’t have an account?{' '}
            <NavLink className="text-green-600 hover:underline font-medium" to="/register">
              Register
            </NavLink>
          </p>
        </div>

        {/* Right: Lottie Animation */}
        <div className="hidden md:flex items-center justify-center  dark:bg-gray-800 p-10">
          <Lottie animationData={loginAnimation} loop autoplay style={{ height: 400 }} />
        </div>
      </div>
    </div>
  );
};

export default Login;
