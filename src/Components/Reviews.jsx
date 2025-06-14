import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Reviewscard from './Reviewscard';
import { useInView } from 'react-intersection-observer';
import { AuthContext } from '../Provider/AuthProvider';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const {user} = useContext(AuthContext)
  const swiperRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    fetch('https://booking-management-system-server-si.vercel.app/reviews',{
       headers:{
            authorization:`Bearer ${user?.accessToken}`
          }
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.accessToken]);

  // Control autoplay when section enters or leaves viewport
  useEffect(() => {
    if (swiperRef.current) {
      if (inView) {
        swiperRef.current.autoplay.start();
      } else {
        swiperRef.current.autoplay.stop();
      }
    }
  }, [inView]);

  return (
    <div className="container mx-auto px-4" ref={ref}>
      <motion.div
        className="text-center max-w-2xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 mt-10"
          style={{ color: '#22c55e' }}
          animate={{
            color: ['#22c55e', '#14b8a6', '#84cc16', '#10b981', '#22c55e'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'loop',
          }}
        >
          Our Testimonial
        </motion.h2>
        <h3 className="text-xl md:text-2xl font-semibold text-green-600 mb-2">
          Real Feedback from Our Happy Travelers Worldwide
        </h3>
        <p className="text-[var(--TEXT-COLOR)] text-base md:text-lg">
          Our attraction passes save you more than buying individual tickets for your tour package system.
        </p>
      </motion.div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <Reviewscard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>

      <NavLink to="/reviews">
        <button className="bg-green-500 btn-wide mt-8 mb-12 mx-auto flex justify-center text-white rounded-md btn">
          Give your Review
        </button>
      </NavLink>
    </div>
  );
};

export default Reviews;
