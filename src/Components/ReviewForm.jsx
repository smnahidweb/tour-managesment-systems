import { useContext, useState } from 'react';
import { FaStar, FaRegStar, FaCamera } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleReviews = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Append rating manually (because it’s in a hidden field)
    formData.set('rating', rating);

 
    const reviewData = Object.fromEntries(formData.entries());

    console.log(reviewData);
   
    axios.post('https://booking-management-system-server-si.vercel.app/reviews',reviewData,{
      headers:{
          authorization:`Bearer ${user?.accessToken}`

      }
    })
    .then(res =>{
        if(res.data.insertedId){
                Swal.fire({
                                title: "Thanks for submitting your valuable Reviews",
                                icon: "success",
                                draggable: true })
                                navigate('/')
            }
    })
   
  };

  return (
    <form onSubmit={handleReviews} className="max-w-xl mx-auto  shadow-lg rounded-2xl p-6 space-y-6 mt-10">
      <h2 className="text-2xl font-bold text-green-600 text-center">Submit Your Review</h2>

      {/* Customer Photo Upload */}
      <div>
        <label className="block font-medium text-[var(--TEXT-COLOR)] mb-1">Customer Photo</label>
        <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 dark:text-gray-300">
          
          <input
            type="text"
            name="photo"
            defaultValue={user?.photoURL}
            placeholder="Paste photo URL"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </label>
      </div>

      {/* Name */}
      <div>
        <label className="block font-medium text-[var(--TEXT-COLOR)] mb-1">Your Name</label>
        <input
          type="text"
          placeholder="S M Nahid Hasan"
          defaultValue={user?.displayName}
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
        />
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
                className="text-yellow-400 text-2xl cursor-pointer transition-transform hover:scale-110"
              />
            ) : (
              <FaRegStar
                key={star}
                onClick={() => setRating(star)}
                className="text-gray-400 text-2xl cursor-pointer transition-transform hover:scale-110"
              />
            )
          )}
        </div>
        <input type="hidden" name="rating" value={rating} />
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
          placeholder="Share your experience..."
          required
          name="feedback"
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-600"
        ></textarea>
      </div>

      {/* Trip Date */}
      <div>
        <label className="block font-medium text-[var(--TEXT-COLOR)] mb-1">Trip Date (optional)</label>
        <input
          type="date"
          name="date"
          className=" cursor-pointer w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg   focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold tracking-wide transition duration-200"
        >
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
