import React, { useEffect, useState, useContext } from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../../Context/AuthContext";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Fetch reviews
  useEffect(() => {
    // Fetch reviews
    fetch("https://local-food-server-pi.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(Array.isArray(data) ? data : []))
      .catch((err) => console.log(err));

    // Fetch favorites for current user
    if (user?.email) {
      fetch(
        `https://local-food-server-pi.vercel.app/favorites?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFavorites(Array.isArray(data.favorites) ? data.favorites : []);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // Overview stats
  const totalReviews = reviews.length;
  const myReviews = reviews.filter((r) => r.created_by === user?.email).length;
  const avgRating =
    reviews.reduce((acc, r) => acc + r.rating, 0) / (reviews.length || 1);
  const totalFavorites = favorites.filter(
    (f) => f.userEmail === user?.email
  ).length;

  // Bar chart data: reviews per restaurant
  const restaurantCounts = {};
  reviews.forEach((r) => {
    restaurantCounts[r.restaurantName] =
      (restaurantCounts[r.restaurantName] || 0) + 1;
  });
  const barData = Object.keys(restaurantCounts).map((key) => ({
    name: key,
    reviews: restaurantCounts[key],
  }));

  // Pie chart: My Reviews vs Others
  const pieData = [
    { name: "My Reviews", value: myReviews },
    { name: "Other Reviews", value: totalReviews - myReviews },
  ];
  const pieColors = ["#ff4500", "#ff6347"];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 p-3 sm:p-4 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
        Dashboard Overview
      </h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
        <div className="card shadow-md p-3 sm:p-4 text-center">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold">
            Total Reviews
          </h2>
          <p className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">
            {totalReviews}
          </p>
        </div>
        <div className="card shadow-md p-3 sm:p-4 text-center">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold">
            My Reviews
          </h2>
          <p className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">
            {myReviews}
          </p>
        </div>
        <div className="card shadow-md p-3 sm:p-4 text-center">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold">
            Avg Rating
          </h2>
          <p className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">
            {avgRating.toFixed(1)}
          </p>
        </div>
        <div className="card shadow-md p-3 sm:p-4 text-center">
          <h2 className="text-sm sm:text-base md:text-xl font-semibold">
            Favorites
          </h2>
          <p className="text-xl sm:text-2xl font-bold mt-1 sm:mt-2">
            {totalFavorites}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <div className="card shadow-md p-3 sm:p-4">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">
            Reviews per Restaurant
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
              <Bar dataKey="reviews" fill="#ff4500" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card shadow-md p-3 sm:p-4">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">
            My Reviews vs Others
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={(entry) => entry.name}
                labelStyle={{ fontSize: "12px" }}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ fontSize: "12px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Data Table */}
      <div className="card shadow-md p-3 sm:p-4">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">
          All Reviews
        </h2>
        <div className="overflow-x-auto -mx-3 sm:mx-0">
          <table className="table w-full text-xs sm:text-sm md:text-base">
            <thead>
              <tr>
                <th className="px-2 py-1 sm:px-4 sm:py-2">Food</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2">Restaurant</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 hidden sm:table-cell">
                  Reviewer
                </th>
                <th className="px-2 py-1 sm:px-4 sm:py-2">Rating</th>
                <th className="px-2 py-1 sm:px-4 sm:py-2 hidden md:table-cell">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((r, i) => (
                <tr key={i}>
                  <td className="px-2 py-1 sm:px-4 sm:py-2">{r.foodName}</td>
                  <td className="px-2 py-1 sm:px-4 sm:py-2">
                    {r.restaurantName}
                  </td>
                  <td className="px-2 py-1 sm:px-4 sm:py-2 hidden sm:table-cell">
                    {r.reviewerName}
                  </td>
                  <td className="px-2 py-1 sm:px-4 sm:py-2">{r.rating}</td>
                  <td className="px-2 py-1 sm:px-4 sm:py-2 hidden md:table-cell">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
