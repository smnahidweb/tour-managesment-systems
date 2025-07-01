import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router';
import { FaQuoteLeft } from 'react-icons/fa';
import 'swiper/css';
import { AuthContext } from '../Provider/AuthProvider';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const { user } = useContext(AuthContext);
  const swiperRef = useRef(null);

  useEffect(() => {
    fetch('https://booking-management-system-server-si.vercel.app/reviews', {
      headers: {
        authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.accessToken]);

  const toggleReadMore = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section className=" dark:bg-gray-900 py-16 px-4">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold mb-2 text-[var(--HEADING-TITLE-TEXT)]">
            Our Testimonial
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">
            Real Feedback from Our Happy Travelers Worldwide
          </h3>
        </div>

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
          {reviews.map((review) => {
            const isExpanded = expandedId === review._id;
            const feedbackWords = review.feedback?.split(' ') || [];
            const displayedText = isExpanded
              ? review.feedback
              : feedbackWords.slice(0, 4).join(' ');

            return (
              <SwiperSlide key={review._id}>
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 h-full flex flex-col justify-between">
                  <FaQuoteLeft className="text-green-500 text-xl mb-4" />

                  {/* Inline feedback + read more */}
                  <p className="text-gray-700 dark:text-gray-200 mb-4 text-sm leading-relaxed">
                    "{displayedText}
                    {feedbackWords.length > 5 && (
                      <>
                        {!isExpanded && '...'}
                        <button
                          onClick={() => toggleReadMore(review._id)}
                          className="text-green-600 underline text-xs ml-1"
                        >
                          {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                      </>
                    )}"
                  </p>

                  <div className="border-t border-dashed border-gray-300 dark:border-gray-600 my-4" />

                  <div className="flex items-center gap-4 mt-auto">
                    {review.photoURL ? (
                      <img
                        src={review.photoURL}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-green-500"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-lg font-bold border-2 border-green-500">
                        {review.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div className="text-sm">
                      <p className="font-semibold text-gray-800 dark:text-white">{review.name}</p>
                      <p className="text-gray-500 dark:text-gray-400">{review.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* CTA Button */}
        <div className="text-center">
          <NavLink to="/reviews">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold mt-8 px-6 py-3 rounded-lg shadow-md transition">
              Give Your Review
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
