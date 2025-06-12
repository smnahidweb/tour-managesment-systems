
import React, { useEffect, useState } from 'react';
import Reviewscard from './Reviewscard';
import { NavLink } from 'react-router';
import { motion } from "framer-motion";
const Reviews = () => {
    const [reviews,setReviews] = useState([]);

    useEffect( ()=>{
     fetch('http://localhost:3000/reviews').then(res=>res.json())
     .then(data =>{
        setReviews(data)
     })


    },[] )
    console.log(reviews)
    return (
        <div>
       <motion.div
  className="text-center max-w-2xl mx-auto mb-12"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <motion.h2
    className="text-3xl md:text-4xl font-bold mb-4 mt-10"
    
    style={{ color: "#22c55e" }} // fallback green color
    animate={{
      color: [
       "#22c55e", 
  "#14b8a6", 
  "#84cc16", 
  "#10b981", 
  "#22c55e", 
      ],
    }}
    transition={{
      duration: 5, 
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "loop",
    }}
  >
    Our Testimonial
  </motion.h2>

  <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-2">
    Real Feedback from Our Happy Travelers Worldwide
  </h3>
  <p className=" text-[var(--TEXT-COLOR)] text-base md:text-lg">
    Our attraction passes save you more than buying individual tickets for your tour package system.
    Our attraction passes save you.
  </p>
</motion.div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
                {
                    reviews.map(review => <Reviewscard key={review._id} review = {review} ></Reviewscard>)
                }
            </div>
            <NavLink to={'/reviews'}>
                <button className='bg-green-500 btn-wide  mt-8 mb-12 mx-auto container flex justify-center text-white rounded-md btn'>
                    Give your Review
                </button>
            </NavLink>
            
        </div>
    );
};

export default Reviews;