import React, { useContext } from 'react';
import Lottie from "lottie-react";
import { FaGoogle } from 'react-icons/fa';
import registerAnimation from "../assets/lottie/login.json";
import { NavLink, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
 const {Login,LoginWithGoogle,user,setUser,SignInWithGoogle} = useContext(AuthContext)
 const navigate = useNavigate()
  const location = useLocation();

const handleLogin = (e) => {
   
        e.preventDefault()
     const form = e.target;
    const email = form.email.value;
    const password = form.password.value

    Login(email,password)
   .then((userCredential) => {
   
    const user = userCredential.user;
    Swal.fire({
      title: `Hi,${user.displayName} Logged in Successfully`,
      icon: "success",
      draggable: true
    });
   navigate(`${location.state ? location.state : "/"}`)
  })
  .catch((error) => {
    const errorCode = error.code;
 
    console.log(errorCode)
    Swal.fire({
              title: 'Error!',
              text: error.message,
              icon: 'error',
              confirmButtonColor: '#ef4444',
            });
          });
  
    }
   

    const handleLoginWithGoogle=(e)=>{
      e.preventDefault()
      SignInWithGoogle()
      .then(result =>{
        console.log(result)
        Swal.fire({
      title: `Hi,${result.user?.displayName} Logged in Successfully`,
      icon: "success",
      draggable: true
    });
    navigate(`${location.state ? location.state : "/"}`)
      })
      .catch(error =>{
        console.log(error.code)
      })
      
   
    }

    return (
         <div className="min-h-screen flex items-center justify-center">
                
        
              <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-3xl overflow-hidden bg-white dark:bg-gray-800">
             
                {/* Left: Lottie Animation */}
                <div className="hidden md:flex items-center justify-center  p-10">
                  <Lottie animationData={registerAnimation} loop autoplay style={{ height: 400 }} />
                </div>
           
                {/* Right: Register Form */}
                 <div>
            <div className="min-h-screen flex items-center justify-center  px-4">
  <div className="w-full max-w-md  p-8 rounded-2xl shadow-xl border border-gray-200">
   <div className="text-center mb-8">
  <h2 className="text-3xl font-extrabold text-green-700 mb-2">Welcome Back</h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
    Sign in to your account
  </p>
  
</div>


    <form  onSubmit={handleLogin} className="space-y-5">
   
      <div>
        <label className="block text-sm font-medium  mb-1">Email Address</label>
        <input
          type="email" name='email'
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="you@example.com"
        />
      </div>

    
      <div>
        <label className="block text-sm font-medium  mb-1">Password</label>
        <input
          type="password" name='password'
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="••••••••"
        />
      </div>

      
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
      >
        Login
      </button>
     
    </form>

    
    <div className="flex items-center my-6">
      <hr className="flex-grow border-gray-300" />
      <span className="mx-3 text-gray-500 text-sm">or</span>
      <hr className="flex-grow border-gray-300" />
    </div>

   
    <button onClick={handleLoginWithGoogle}
      type="button"
      className="w-full cursor-pointer flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition"
    >
    
     <FaGoogle size={24} /> <span className="text-gray-700 font-medium">Continue with Google</span>
    </button>
    <p className='py-2 mt-2'>Dont HaVe an Account? <NavLink className="text-green-500" to="/register">Register</NavLink> </p>
  </div>
  
</div>

        </div>
              </div>
            </div>
    );
};

export default Login;