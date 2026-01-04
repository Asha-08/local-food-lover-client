import React from "react";
import { FaStar } from "react-icons/fa";

import { Link } from "react-router";

const FeatureCard = ({ review }) => {
  const {
    photo,
    foodName,
    restaurantName,
    restaurantLocation,
    reviewerName,
    rating,
    _id,
  } = review;
  return (
     <div className=" shadow rounded overflow-hidden hover:shadow transition-shadow duration-300">
      <img
        src={photo}
        alt={foodName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{foodName}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {restaurantName}, {restaurantLocation}
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-400">Reviewer: {reviewerName}</p>
        <p className="flex items-center gap-1 text-orange-500 font-bold text-lg">
      <FaStar className="text-base" />
      <span>{rating}</span>
    </p>
        <Link
          to={`/card-details/${_id}`}
          className="mt-3 inline-block text-sm font-medium text-orange-500 hover:underline"
        >
          View Details →
        </Link>
      </div>
      
    </div>

  );
};

export default FeatureCard;
