import React, { useState, useEffect, useRef } from 'react';
import { FaUsers, FaStar, FaUtensils, FaComments, FaHeart, FaTrophy } from 'react-icons/fa';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: <FaUsers className="w-8 h-8 sm:w-10 sm:h-10" />,
      number: 15000,
      suffix: "+",
      label: "Active Users",
      description: "Food enthusiasts in our community",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: <FaStar className="w-8 h-8 sm:w-10 sm:h-10" />,
      number: 50000,
      suffix: "+",
      label: "Reviews Posted",
      description: "Authentic dining experiences shared",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: <FaUtensils className="w-8 h-8 sm:w-10 sm:h-10" />,
      number: 2500,
      suffix: "+",
      label: "Restaurants",
      description: "Dining spots reviewed and rated",
      gradient: "from-pink-400 to-red-500"
    },
    {
      icon: <FaComments className="w-8 h-8 sm:w-10 sm:h-10" />,
      number: 75000,
      suffix: "+",
      label: "Comments",
      description: "Engaging conversations daily",
      gradient: "from-green-400 to-teal-500"
    },
    {
      icon: <FaHeart className="w-8 h-8 sm:w-10 sm:h-10" />,
      number: 30000,
      suffix: "+",
      label: "Favorites Saved",
      description: "Dishes bookmarked by users",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <FaTrophy className="w-8 h-8 sm:w-10 sm:h-10" />,
      number: 98,
      suffix: "%",
      label: "Satisfaction Rate",
      description: "Users who love our platform",
      gradient: "from-amber-400 to-yellow-500"
    },
  ];

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animated Counter Component
  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }, [isVisible, end, duration]);

    return (
      <span>
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-base-200 to-base-100 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
            Join thousands of food lovers making informed dining decisions every day
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-base-200 rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-base-content/5"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${idx * 0.1}s both` : 'none'
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`mb-4 sm:mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br ${stat.gradient} text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  {stat.icon}
                </div>

                {/* Number with Animation */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-base-content">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-base-content">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-base-content/70">
                  {stat.description}
                </p>

                {/* Decorative Bottom Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlight Banner */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-white">
            <div className="flex items-center gap-3">
              <FaStar className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">4.8/5</div>
                <div className="text-xs sm:text-sm opacity-90">Average Rating</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/30" />
            <div className="flex items-center gap-3">
              <FaTrophy className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">Award</div>
                <div className="text-xs sm:text-sm opacity-90">Best Food Review Platform 2024</div>
              </div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/30" />
            <div className="flex items-center gap-3">
              <FaHeart className="w-8 h-8 sm:w-10 sm:h-10" />
              <div className="text-left">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">Trusted</div>
                <div className="text-xs sm:text-sm opacity-90">By Food Lovers Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Statistics;