import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import ReviewsCard from "../Card/ReviewsCard";

// Skeleton card component
const SkeletonCard = () => (
  <div className="border rounded-lg p-4 animate-pulse bg-base-200 h-64 flex flex-col justify-between">
    <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-1"></div>
    <div className="h-4 bg-gray-300 rounded w-1/3"></div>
    <div className="h-10 bg-gray-300 rounded w-full mt-auto"></div>
  </div>
);

const AllReviews = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const [filteredModels, setFilteredModels] = useState(data);

  const [loading, setLoading] = useState(true); // grid loading only

  // Filter and sort states
  const [searchText, setSearchText] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  // Mobile filter toggle
  const [showFilters, setShowFilters] = useState(false);
  useEffect(() => {
    if (data) {
      setModels(data);
      setFilteredModels(data);
      setLoading(false);
    }
  }, [data]);
  // Apply filters and sorting
  useEffect(() => {
    let result = [...models];

    if (ratingFilter) {
      const minRating = parseInt(ratingFilter);
      result = result.filter((r) => r.rating >= minRating);
    }

    if (dateFilter) {
      const now = new Date();
      result = result.filter((r) => {
        const reviewDate = new Date(r.createdAt);
        const diffDays = Math.ceil(
          Math.abs(now - reviewDate) / (1000 * 60 * 60 * 24)
        );
        if (dateFilter === "7") return diffDays <= 7;
        if (dateFilter === "30") return diffDays <= 30;
        if (dateFilter === "90") return diffDays <= 90;
        return true;
      });
    }

    if (sortBy === "rating-high") result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === "rating-low")
      result.sort((a, b) => a.rating - b.rating);
    else if (sortBy === "date-new")
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    else if (sortBy === "date-old")
      result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    setFilteredModels(result);
    setCurrentPage(1);
  }, [models, ratingFilter, dateFilter, sortBy]);

  // Search
  const handleSearch = (e) => {
    e.preventDefault();
    // Only grid shows loading, search input works normally
    setLoading(true);

    fetch(`https://local-food-server-pi.vercel.app/search?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  // Reset filters
  const handleReset = () => {
    setSearchText("");
    setRatingFilter("");
    setDateFilter("");
    setSortBy("");
    setModels(data);
    setCurrentPage(1);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredModels.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredModels.length / itemsPerPage);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
      {/* Header */}
      <div className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent mb-4 sm:mb-6">
        All Reviews
      </div>

      {/* Search */}
      <form
        onSubmit={handleSearch}
        className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-4 sm:mb-6"
      >
        <label className="input flex-1 max-w-md">
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
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </g>
          </svg>
          <input
            name="search"
            type="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            required
            placeholder="Search by food name..."
            className="w-full"
          />
        </label>
        <button
          type="submit"
          className="btn px-6 py-2 btn font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition-colors"
        >
          Search
        </button>
      </form>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full btn bg-gradient-to-r from-indigo-700 to-orange-500 text-white "
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filters */}
      <div
        className={`${
          showFilters ? "block" : "hidden"
        } lg:block bg-base-200 rounded-2xl p-4 sm:p-6 mb-6`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Rating */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Filter by Rating</span>
            </label>
            <select
              value={ratingFilter}
              onChange={(e) => setRatingFilter(e.target.value)}
              className="select select-bordered w-full rounded-full"
            >
              <option value="">All Ratings</option>
              <option value="4">4+ Stars</option>
              <option value="3">3+ Stars</option>
              <option value="2">2+ Stars</option>
              <option value="1">1+ Stars</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Filter by Date</span>
            </label>
            <select
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="select select-bordered w-full rounded-full"
            >
              <option value="">All Time</option>
              <option value="7">Last 7 Days</option>
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Sort By</span>
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select select-bordered w-full rounded-full"
            >
              <option value="">Default</option>
              <option value="rating-high">Rating: High to Low</option>
              <option value="rating-low">Rating: Low to High</option>
              <option value="date-new">Date: Newest First</option>
              <option value="date-old">Date: Oldest First</option>
            </select>
          </div>

          {/* Reset */}
          <div className="flex items-end">
            <button
              onClick={handleReset}
              className="btn w-full bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-orange-500 hover:to-red-500"
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div className="mt-4 text-center text-sm sm:text-base">
          <span className="font-semibold text-orange-600">
            Showing {currentItems.length} of {filteredModels.length} reviews
          </span>
        </div>
      </div>

      {/* Reviews Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {Array(itemsPerPage)
            .fill(0)
            .map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
        </div>
      ) : currentItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {currentItems.map((review) => (
            <ReviewsCard key={review._id} review={review} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 sm:py-16">
          <p className="text-xl sm:text-2xl font-semibold text-gray-500">
            No reviews found
          </p>
          <p className="text-sm sm:text-base text-gray-400 mt-2">
            Try adjusting your filters or search terms
          </p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-8 sm:mt-12">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn btn-sm sm:btn-md bg-gradient-to-r from-orange-500 to-red-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
          >
            Previous
          </button>

          <div className="flex gap-1 sm:gap-2 flex-wrap justify-center">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx + 1}
                onClick={() => paginate(idx + 1)}
                className={`btn btn-sm sm:btn-md ${
                  currentPage === idx + 1
                    ? "bg-gradient-to-r from-indigo-700 to-orange-500 text-white"
                    : "bg-base-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="btn btn-sm sm:btn-md bg-gradient-to-r from-orange-500 to-red-500 text-white disabled:bg-gray-300 disabled:text-gray-500"
          >
            Next
          </button>
        </div>
      )}

      {/* Go Back */}
      <div className="py-6 sm:py-8 flex justify-center">
        <Link
          to="/"
          className="px-6 sm:px-8 py-3 btn font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition-colors text-sm sm:text-base"
        >
          ← Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default AllReviews;
