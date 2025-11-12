import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import ReviewsCard from "../Card/ReviewsCard";

const AllReviews = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);
  // console.log(data);
  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setLoading(true);

    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModels(data);
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="text-2xl text-center font-bold">All Reviews</div>

      <form
        onSubmit={handleSearch}
        className="text-center flex gap-2 justify-center my-8"
      >
        <label className="input rounded-full ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" required placeholder="Search" />
        </label>
        <button
          className="btn px-6 py-2 rounded-full font-semibold text-white bg-linear-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition-colors"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Searching...
            </>
          ) : (
            "Search"
          )}
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {models.map((review) => (
          <ReviewsCard key={review._id} review={review}></ReviewsCard>
        ))}
      </div>
      <div className="my-8 flex justify-center">
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-linear-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition-colors"
        >
          ← Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default AllReviews;
