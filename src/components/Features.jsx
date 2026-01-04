import {
  FaPenFancy,
  FaEdit,
  FaHeart,
  FaUserCircle,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPenFancy />,
    title: "Write Food Reviews",
    description:
      "Share your real food experiences by writing detailed reviews with ratings and images."
  },
  {
    icon: <FaEdit />,
    title: "Edit & Manage Reviews",
    description:
      "Update or remove your reviews anytime directly from your personal dashboard."
  },
  {
    icon: <FaHeart />,
    title: "Save Favorites",
    description:
      "Bookmark your favorite food reviews and access them instantly whenever you want."
  },
  {
    icon: <FaUserCircle />,
    title: "Profile Management",
    description:
      "Customize your profile with your name and photo while keeping your email secure."
  },
  {
    icon: <FaSearch />,
    title: "Explore Restaurants",
    description:
      "Discover food from different restaurants and locations with rich user reviews."
  },
  {
    icon: <FaChartLine />,
    title: "Dashboard Insights",
    description:
      "Get a clear overview of your activity including reviews, favorites, and ratings."
  }
];

const Features = () => {
  return (
    <section className="w-full bg-base-100  py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent">
            What You Can Do
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to explore, review, and manage food experiences in one place.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-base-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-base-content mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
