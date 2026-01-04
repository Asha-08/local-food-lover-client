import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1673006768205-b9a7bc6842a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heading: 'Discover Culinary Excellence',
    subtext: 'Experience flavors that tell a story',
    buttonText: 'Explore Reviews',
  },
  {
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D',
    heading: 'Authentic Reviews, Real Experiences',
    subtext: 'Join our community of food enthusiasts',
    buttonText: 'Read Reviews',
  },
  {
    image: 'https://images.pexels.com/photos/11129150/pexels-photo-11129150.png',
    heading: 'Your Food Journey Starts Here',
    subtext: 'Find the perfect dish for every moment',
    buttonText: 'Get Started',
  },
  {
    image: 'https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg',
    heading: 'Taste the Best in Town',
    subtext: 'Curated recommendations from real diners',
    buttonText: 'View Dishes',
  },
  {
    image: 'https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg',
    heading: 'From Kitchen to Your Heart',
    subtext: 'Share your dining stories with the world',
    buttonText: 'Share Review',
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToNext = () => {
    window.scrollBy({
      top: window.innerHeight * 0.7,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative w-full" style={{ height: '70vh', maxHeight: '700px', minHeight: '500px' }}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        loop={true}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                  <div className="max-w-2xl">
                    {/* Animated Heading */}
                    <h1 
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                      style={{
                        animation: activeIndex === idx ? 'slideInLeft 0.8s ease-out' : 'none',
                      }}
                    >
                      {slide.heading}
                    </h1>
                    
                    {/* Animated Subtext */}
                    <p 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-8"
                      style={{
                        animation: activeIndex === idx ? 'slideInLeft 0.8s ease-out 0.2s both' : 'none',
                      }}
                    >
                      {slide.subtext}
                    </p>
                    
                    {/* Animated Button */}
                    <button
                      className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 btn hover:from-red-500 hover:to-orange-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
                      style={{
                        animation: activeIndex === idx ? 'slideInLeft 0.8s ease-out 0.4s both' : 'none',
                      }}
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styles */}
      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        :global(.swiper-pagination-bullet-active) {
          width: 32px;
          border-radius: 6px;
          background: linear-gradient(to right, #f97316, #ef4444);
        }

        @media (max-width: 640px) {
          :global(.swiper-pagination-bullet) {
            width: 8px;
            height: 8px;
          }
          :global(.swiper-pagination-bullet-active) {
            width: 24px;
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-2 text-white hover:text-orange-500 transition-colors duration-300">
          <span className="text-xs sm:text-sm font-semibold tracking-wider hidden sm:block">
            SCROLL DOWN
          </span>
          <div 
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2 hover:border-orange-500 transition-colors duration-300"
            style={{ animation: 'bounce 2s infinite' }}
          >
            <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
          </div>
          <svg 
            className="w-6 h-6 sm:w-8 sm:h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;