import React from 'react';
import { FaStar, FaUsers, FaShieldAlt, FaHeart, FaUtensils, FaMapMarkedAlt, FaClock, FaAward } from 'react-icons/fa';

const ChooseUs = () => {
  const features = [
    { 
      title: "Authentic Reviews", 
      icon: <FaStar className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Real reviews from verified diners sharing genuine experiences and honest feedback about their meals",
      gradient: "from-yellow-400 to-orange-500"
    },
    { 
      title: "Active Community", 
      icon: <FaUsers className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Join thousands of passionate food enthusiasts discovering and sharing great dining spots daily",
      gradient: "from-blue-400 to-indigo-500"
    },
    { 
      title: "Trusted Platform", 
      icon: <FaShieldAlt className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Verified ratings and secure platform you can rely on for authentic dining information",
      gradient: "from-green-400 to-teal-500"
    },
    { 
      title: "Curated Selection", 
      icon: <FaHeart className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Handpicked recommendations from local food lovers and experienced culinary experts",
      gradient: "from-pink-400 to-red-500"
    },
    {
      title: "Diverse Cuisines",
      icon: <FaUtensils className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Explore restaurants serving cuisines from around the world, all in one convenient platform",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Smart Search",
      icon: <FaMapMarkedAlt className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Advanced location-based search to find the perfect restaurant near you instantly",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Real-Time Updates",
      icon: <FaClock className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Get instant notifications about new reviews, special offers, and trending restaurants",
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "Award Recognition",
      icon: <FaAward className="w-8 h-8 sm:w-10 sm:h-10" />,
      description: "Discover award-winning restaurants and highly-rated dishes recognized by our community",
      gradient: "from-amber-400 to-yellow-500"
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Why Choose Flavor Hub?
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
            Your trusted companion for discovering and sharing amazing food experiences
          </p>
        </div>

        {/* Features Grid - 4 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative bg-base-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-base-content/5"
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Card Content */}
              <div className="relative p-6 sm:p-8 flex flex-col items-center text-center h-full">
                {/* Icon Container with Floating Animation */}
                <div className={`mb-5 sm:mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 shadow-lg`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-base-content group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-base-content/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Bottom Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;