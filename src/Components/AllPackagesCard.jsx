import { FaClock, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router";

const AllPackageCard = ({ pack }) => {
  const {
    _id,
    imageUrl,
    tourName,
    departureLocation,
    destination,
    duration,
    departureDate,
    price,
  } = pack;

  return (
    <div className="relative h-full" data-aos="fade-up">
      <div className="dark:bg-gray-900  rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full">
        <img
          src={imageUrl}
          alt={tourName}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-xl font-semibold text-[var(--HEADING-TITLE-TEXT)] dark:text-green-300 mb-2">
            {tourName}
          </h3>

          {/* Route Info */}
          <div className="flex items-center gap-3 mb-3">
            <p className="text-sm font-medium text-[var(--TEXT-COLOR)]">
              {departureLocation} to {destination}
            </p>
          </div>

          {/* Duration & Departure Date */}
          <div className="flex items-center justify-between text-sm text-[var(--TEXT-COLOR)] mb-3">
            <span className="flex items-center gap-2">
              <FaClock className="text-[var(--TEXT-COLOR)]" />
              {duration}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-[var(--HEADING-TITLE-TEXT)]" />
              {departureDate}
            </span>
          </div>

          {/* Price & Button */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-lg font-bold text-[var(--HEADING-TITLE-TEXT)]">
              ৳{price}
            </p>
            <Link
              to={`/allPackages/${_id}`}
              className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPackageCard;
