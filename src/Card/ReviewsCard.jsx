import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router";

const ReviewsCard = ({ review }) => {
  const [liked, setLiked] = useState(false);
  const {
    _id,
    foodName,
    restaurantName,
    restaurantLocation,
    photo,
    reviewerName,
    rating,
    createdAt,
    created_by,
  } = review;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div>
      <div className="max-w-sm bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition duration-300">
        <img src={photo} alt={foodName} className="w-full h-52 object-cover" />

        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {foodName}
            </h3>

            {/* ❤️ Heart Button */}
            <button onClick={() => setLiked(!liked)}>
              <FaHeart
                size={22}
                className={`transition-colors duration-300 ${
                  liked ? "text-red-500" : "text-gray-400"
                } hover:text-red-500`}
              />
            </button>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
            <span className="font-medium">{restaurantName}</span> —{" "}
            {restaurantLocation}
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Reviewed by <span className="font-semibold">{reviewerName}</span>
          </p>

          <div className="flex items-center justify-between mt-3">
            <span className="text-yellow-500 font-semibold">⭐ {rating}</span>
            <Link
              to={`/card-details/${review._id}`}
              className="text-sm font-medium text-orange-600 hover:underline"
            >
              View Details →
            </Link>
          </div>

          {/* Created Info Section */}
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
            <p>
              Created by: <span className="font-medium">{created_by}</span>
            </p>
            <p>Date: {formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
