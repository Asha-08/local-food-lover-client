import { FaUserPlus, FaUtensils, FaHeart, FaChartBar } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus />,
    title: "Create an Account",
    description:
      "Sign up using your email or Google account to unlock all features including reviews, favorites, and dashboard access."
  },
  {
    icon: <FaUtensils />,
    title: "Explore & Add Reviews",
    description:
      "Browse food reviews from different restaurants or add your own experience by rating and reviewing food items."
  },
  {
    icon: <FaHeart />,
    title: "Save Your Favorites",
    description:
      "Found something you love? Save reviews to your favorites and access them anytime from your dashboard."
  },
  {
    icon: <FaChartBar />,
    title: "Manage from Dashboard",
    description:
      "Track your reviews, favorites, and activity insights through a clean and interactive dashboard."
  }
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-base-100  py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started in just a few simple steps and enjoy discovering and sharing great food experiences.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-base-100 rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-base-content mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
