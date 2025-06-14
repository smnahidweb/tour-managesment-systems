import React, { useEffect } from 'react';
import { NavLink } from 'react-router';
import 'aos/dist/aos.css';
import AOS from 'aos';
const Error = () => {
     useEffect(() => {
                        AOS.init({
                          duration: 1000,
                          once: true,
                          offset: 120,          
                          easing: 'ease-in-out' 
                        });
                      }, []);
    const error = "https://i.ibb.co/kgbb8PpR/error.jpg"
    return (
        <div className=' mt-12 flex justify-center items-center flex-col ' data-aos="fade-up">
            <img src={error} alt="" />
            <div>
                <NavLink to={"/"}>
                    <button className='btn w-full font-semibold p-4 bg-green-600 text-white'>
                        Back To Home
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default Error;