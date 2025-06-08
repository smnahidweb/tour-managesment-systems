import React from 'react';
import { NavLink } from 'react-router';

const Error = () => {
    const error = "https://i.ibb.co/kgbb8PpR/error.jpg"
    return (
        <div className=' mt-12 flex justify-center items-center flex-col '>
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