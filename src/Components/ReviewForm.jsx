import { useContext, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleReviews = (e) => {
    e.preventDefault();
    const form = e.target;

    const reviewData = {
      name: user?.displayName || form.name.value,
      photo: user?.photoURL || 'https://i.ibb.co/YTNF3nY/user.png', // fallback image
      rating,
      tourName: form.tourName.value,
      feedback: form.feedback.value,
      date: form.date.value,
    };

    axios
      .post('https://booking-management-system-server-si.vercel.app/reviews', reviewData, {
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Thanks for submitting your valuable Review!",
            icon: "success",
          });
          navigate('/');
        }
      });
  };

  return (
    <form onSubmit={handleReviews} className="max-w-xl mx-auto shadow-lg rounded-2xl p-6 space-y-6 mt-10">
      <h2 className="text-2xl font-bold text-green-600 text-center">Submit Your Review</h2>

      {/* Display user image (readonly) */}
      <div className="flex items-center gap-4">
        <img
          src={user?.photoURL || 'https://i.ibb.co/YTNF3nY/user.png'}
          alt="User"
          className="w-16 h-16 rounded-full border-2 border-green-500"
        />
        <p className="text-gray-800 dark:text-gray-200 font-medium">{user?.displayName}</p>
      </div>

      {/* Rating */}
      <div>
        <label className="block font-medium text-[var(--TEXT-COLOR)] mb-1">Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) =>
            star <= rating ? (
              <FaStar
                key={star}
                onClick={() => setRating(star)}
                className="text-yellow-400 text-2xl cursor-pointer hover:scale-110"
              />
            ) : (
              <FaRegStar
                key={star}
                onClick={() => setRating(star)}
                className="text-gray-400 text-2xl cursor-pointer hover:scale-110"
              />
            )
          )}
        </div>
      </div>

      {/* Tour Name */}
      <div>
        <label className="block font-medium text-[var(--TEXT-COLOR)] mb-1">Tour Name / Destination</label>
        <input
          type="text"
          placeholder="Sundarbans Adventure"
          name="tourName"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Feedback */}
      <div>
        <label className="block font-medium text-[var(--TEXT-COLOR)] mb-1">Your Feedback</label>
        <textarea
          rows="4"
          name="feedback"
          required
          placeholder="Share your experience..."
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
        ></textarea>
      </div>

      {/* Date */}
      <div>
        <label className="block font-medium text-[var(--TEXT-COLOR)] mb-1">Trip Date (optional)</label>
        <input
          type="date"
          name="date"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition duration-200"
        >
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
