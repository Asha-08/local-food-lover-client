import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const EditReview = () => {
  const review = useLoaderData();
  // console.log(review);

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = {
      foodName: e.target.foodName.value,
      photo: e.target.photo.value,
      restaurantName: e.target.restaurantName.value,
      restaurantLocation: e.target.restaurantLocation.value,
      rating: parseFloat(e.target.rating.value),
      reviewText: e.target.reviewText.value,
      reviewerName: e.target.reviewerName.value,
    };

    // console.log(formData)

    fetch(`https://local-food-server-pi.vercel.app/reviews/${review._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        //   toast.success("Successfully added!")
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Review updated successfully!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: "#fff",
        });
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-3xl mx-auto  shadow-lg rounded-xl p-8 mt-10">
      <h2 className="text-4xl text-center font-bold bg-linear-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent mb-6">
        Update Your Review
      </h2>
      <form onSubmit={handleUpdate} className="space-y-5">
        {/* Food Name */}
        <div>
          <label className="block text-gray-700 dark:text-gray-400 font-medium mb-1">
            Food Name
          </label>
          <input
            type="text"
            name="foodName"
            defaultValue={review?.foodName}
            required
            placeholder="Enter food name"
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Food Image */}
        <div>
          <label className="block text-gray-700 dark:text-gray-400 font-medium mb-1">
            Food Image URL
          </label>
          <input
            type="url"
            name="photo"
            defaultValue={review?.photo}
            required
            placeholder="Enter image URL"
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Restaurant Name */}
        <div>
          <label className="block text-gray-700 dark:text-gray-400 font-medium mb-1">
            Restaurant Name
          </label>
          <input
            type="text"
            name="restaurantName"
            defaultValue={review?.restaurantName}
            required
            placeholder="Enter restaurant name"
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 dark:text-gray-400 font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            name="restaurantLocation"
            defaultValue={review?.restaurantLocation}
            required
            placeholder="Enter restaurant location"
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Reviewer Name */}
        <div>
          <label className="block text-gray-700 dark:text-gray-400 font-medium mb-1">
            Reviewer Name
          </label>
          <input
            type="text"
            name="reviewerName"
            defaultValue={review?.reviewerName}
            required
            placeholder="Enter your name"
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-gray-700 dark:text-gray-400 font-medium mb-1">
            Star Rating (1 - 5)
          </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            defaultValue={review?.rating}
            required
            placeholder="Give rating (e.g. 4.5)"
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Review Text */}
        <div>
          <label className="block text-gray-700 dark:text-gray-400 font-medium mb-1">
            Review Text
          </label>
          <textarea
            name="reviewText"
            rows="4"
            defaultValue={review?.reviewText}
            required
            placeholder="Write your review here..."
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className=" btn bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold px-8 py-3  hover:from-red-500 hover:to-orange-500 transition-all"
          >
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditReview;
