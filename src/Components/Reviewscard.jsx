import React from 'react';
import { FaStar, FaRegUser } from 'react-icons/fa';
import {  FaQuoteRight } from "react-icons/fa";
const Reviewscard = ({review}) => {
    console.log(review)
    const {
        photo,
        name,
        rating,
        tourName,
        feedback,
       

    } = review;
    return (
          <div className="relative bg-green-50 dark:bg-gray-900 rounded-2xl shadow-md px-6 pt-10 pb-6 w-full max-w-sm mx-auto text-left h-full mb-4">
      {/* Floating Profile Image */}
      <div className="absolute -top-2 left-14 -translate-x-1/2">
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full border-4 border-green-200 shadow-md object-cover mt-4 mb-4"
        />
      </div>

      {/* Quote Icon */}
      <FaQuoteRight className="absolute top-4 right-4 text-green-500 text-3xl opacity-70" />

      {/* Star Ratings */}
      <div className="flex justify-start mt-16 mb-4 text-green-500 text-sm ">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <FaStar key={i} />
          ) : (
            <FaStar key={i} className="text-gray-300" />
          )
        )}
      </div>

      {/* Feedback */}
      <p className="text-base text-gray-600 dark:text-gray-200 font-medium leading-relaxed mb-4">
        "{feedback}" --- {tourName}
      </p>

      {/* Dotted Line */}
      <div className="border-t border-dotted border-gray-300 my-4"></div>

      {/* Name + Location */}
      <div className="text-sm">
        <p className="font-bold text-gray-900 dark:text-white">{name}</p>
       
      </div>
    </div>
    );
};

export default Reviewscard;