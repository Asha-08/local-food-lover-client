import React, { useState } from 'react';
import { FaEnvelope, FaCheck, FaBell, FaUtensils, FaStar, FaGift } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const benefits = [
    {
      icon: <FaUtensils className="w-5 h-5" />,
      text: "Weekly restaurant picks"
    },
    {
      icon: <FaStar className="w-5 h-5" />,
      text: "Exclusive reviews first"
    },
    {
      icon: <FaGift className="w-5 h-5" />,
      text: "Special deals & offers"
    },
    {
      icon: <FaBell className="w-5 h-5" />,
      text: "Latest food trends"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Newsletter Card */}
          <div className="bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 sm:p-10 lg:p-12 text-white">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-white/20 rounded-2xl backdrop-blur-sm mb-4">
                    <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                    Stay Updated!
                  </h2>
                  <p className="text-base sm:text-lg opacity-90 leading-relaxed">
                    Subscribe to our newsletter and never miss out on the best dining experiences, exclusive reviews, and amazing food deals.
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 sm:space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        {benefit.icon}
                      </div>
                      <span className="text-sm sm:text-base font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Badge */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-white/20">
                  <p className="text-xs sm:text-sm opacity-75">
                    🔒 Join 15,000+ food lovers. Unsubscribe anytime.
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-base-100 p-8 sm:p-10 lg:p-12 flex items-center">
                <div className="w-full">
                  {!isSubscribed ? (
                    <>
                      <h3 className="text-xl sm:text-2xl font-bold text-base-content mb-2">
                        Get Started Today
                      </h3>
                      <p className="text-sm sm:text-base text-base-content/70 mb-6 sm:mb-8">
                        Enter your email and join our community
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Input */}
                        <div>
                          <label className="label">
                            <span className="label-text font-semibold text-base-content">Email Address</span>
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@example.com"
                            required
                            className="input input-bordered w-full rounded-full text-base-content bg-base-200 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                          />
                        </div>

                        {/* Subscribe Button */}
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="btn w-full rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:from-red-500 hover:to-orange-500 border-0 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <>
                              <span className="loading loading-spinner loading-sm"></span>
                              Subscribing...
                            </>
                          ) : (
                            <>
                              <FaEnvelope className="w-4 h-4" />
                              Subscribe Now
                            </>
                          )}
                        </button>
                      </form>

                      {/* Privacy Note */}
                      <p className="text-xs text-base-content/60 mt-4 text-center">
                        We respect your privacy. No spam, ever.
                      </p>
                    </>
                  ) : (
                    /* Success Message */
                    <div className="text-center py-8">
                      <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                        <FaCheck className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-base-content mb-2">
                        You're All Set!
                      </h3>
                      <p className="text-base sm:text-lg text-base-content/70 mb-4">
                        Welcome to the Flavor Hub community
                      </p>
                      <p className="text-sm text-base-content/60">
                        Check your inbox for a confirmation email
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-base-200 rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">15K+</div>
              <div className="text-xs sm:text-sm text-base-content/70">Subscribers</div>
            </div>
            <div className="bg-base-200 rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">Weekly</div>
              <div className="text-xs sm:text-sm text-base-content/70">Updates</div>
            </div>
            <div className="bg-base-200 rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1">100%</div>
              <div className="text-xs sm:text-sm text-base-content/70">Free</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;