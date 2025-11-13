import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const AddReview = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      foodName: e.target.foodName.value,
      photo: e.target.photo.value,
      restaurantName: e.target.restaurantName.value,
      restaurantLocation: e.target.restaurantLocation.value,
      rating: parseFloat(e.target.rating.value),
      reviewText: e.target.reviewText.value,
      reviewerName: e.target.reviewerName.value,
      createdAt: new Date(),
      created_by: user.email,
    };

    // console.log(formData)

    fetch("https://local-food-server-pi.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added!");
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8 ">
      <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
        Share Your Review 🍽️
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Food Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Food Name
          </label>
          <input
            type="text"
            name="foodName"
            placeholder="Enter food name"
            required
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Food Image */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Food Image URL
          </label>
          <input
            type="url"
            name="photo"
            placeholder="Enter image URL"
            required
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Restaurant Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Restaurant Name
          </label>
          <input
            type="text"
            name="restaurantName"
            placeholder="Enter restaurant name"
            required
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            name="restaurantLocation"
            placeholder="Enter restaurant location"
            required
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Reviewer Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Reviewer Name
          </label>
          <input
            type="text"
            name="reviewerName"
            placeholder="Enter your name"
            required
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Star Rating (1 - 5)
          </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            placeholder="Give rating (e.g. 4.5)"
            required
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Review Text */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Review Text
          </label>
          <textarea
            name="reviewText"
            rows="4"
            placeholder="Write your review here..."
            required
            className="w-full border border-orange-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold px-8 py-3 rounded-full hover:from-red-500 hover:to-orange-500 transition-all"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
