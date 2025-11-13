import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyFavorites = () => {

  const {user} = use(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/favorites?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
           const merged = data.reviews.map((review, index) => ({
          ...review,
          favoriteId: data.favorites[index]?._id, // favorites collection ID
        }));
        setFavorites(merged);
          // setFavorites(data.reviews);
        } else {
          setFavorites([]);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [user?.email]);

  const handleRemoveFavorite = (favoriteId) =>{
     Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this from favorites?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/favorites/${favoriteId}`, {
          method: "DELETE",
        })
         .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setFavorites((prev) =>
                prev.filter((fav) => fav._id !== favoriteId)
              );
              Swal.fire({
                icon: "success",
                title: "Removed!",
                timer: 1200,
                showConfirmButton: false,
              });
              } else {
              Swal.fire({
                icon: "error",
                title: "Failed to remove",
              });
            }
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Server error",
            });
          });
      }
    });


  }

  // loading

   if (loading) {
    return <p className="text-center mt-10">Loading favorites...</p>;
  }

   if (favorites.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold mb-3">No Favorites Yet 💔</h2>
        <p className="text-gray-500 mb-5">Add some from the reviews page!</p>
        <Link
          to="/all-reviews"
          className="btn btn-primary rounded-full px-6"
        >
          Browse Reviews
        </Link>
      </div>
    );
  }


  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl text-center font-bold bg-linear-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent mb-6 p-2">My Favorites</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {favorites.map((review) => (
          <div
            key={review._id}
            className="bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition duration-300"
          >
            <img
              src={review.photo}
              alt={review.foodName}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {review.foodName}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium">{review.restaurantName}</span> —{" "}
                {review.restaurantLocation}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Reviewed by <span className="font-semibold">{review.reviewerName}</span>
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-yellow-500 font-semibold">⭐ {review.rating}</span>
                <button
                  onClick={() => handleRemoveFavorite(review.favoriteId)} 
                  className="text-red-500 font-semibold hover:underline"
                >
                  Remove ❤️
                </button>
              </div>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                Added on: {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyFavorites