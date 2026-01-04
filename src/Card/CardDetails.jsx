import React from "react";
import { FaStar } from "react-icons/fa";

import { Link, useLoaderData } from "react-router";

const CardDetails = () => {
  const review = useLoaderData();
  // console.log(review);

  const {
    photo,
    foodName,
    restaurantName,
    restaurantLocation,
    reviewerName,
    rating,
    reviewText,
    createdAt,
    created_by,
  } = review;

  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="max-w-5xl mx-auto  p-10  shadow-lg rounded-xl">
      {/* Container: Flex layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Photo */}
        <div className="md:w-1/2 shrink-0">
          <img
            src={photo}
            alt={foodName}
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            {/* Food & Restaurant */}
            <h1 className="text-3xl font-bold mb-2">{foodName}</h1>
            <p className="text-gray-500 text-lg mb-4">
              {restaurantName}, {restaurantLocation}
            </p>

            {/* Reviewer Info */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-gray-700 dark:text-gray-400 font-medium">
                  Reviewer: {reviewerName}
                </p>
                <p className="text-gray-500 text-sm">By: {created_by}</p>
                <p className="flex items-center gap-1 text-orange-500 font-bold text-lg">
                  <FaStar className="text-base" />
                  <span>{rating}</span>
                </p>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-800 dark:text-gray-400 text-lg mb-4">
              {reviewText}
            </p>

            {/* Created Date */}
            <p className="text-gray-500 text-sm">
              Reviewed on: {formattedDate}
            </p>
          </div>

          {/* Go Back Home Button */}
          <div className="mt-6">
            <Link
              to="/"
              className=" px-6 py-3 btn font-semibold text-white bg-linear-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition-colors"
            >
              ← Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
