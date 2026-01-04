import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { FaStar, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Food Blogger",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
      rating: 5,
      text: "Flavor Hub has completely changed how I discover restaurants. The authentic reviews help me make confident dining choices every time!",
    },
    {
      name: "James Chen",
      role: "Restaurant Owner",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      rating: 5,
      text: "The detailed reviews help us understand what our customers love and where we can improve. Best platform for genuine feedback!",
    },
    {
      name: "Emily Rodriguez",
      role: "Food Enthusiast",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop",
      rating: 5,
      text: "I love how easy it is to share my dining experiences and read honest reviews. The community here is passionate and helpful!",
    },
    {
      name: "Michael Thompson",
      role: "Travel Vlogger",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
      rating: 5,
      text: "Traveling to new cities, Flavor Hub is essential for finding authentic local cuisine. It's like having a local food guide everywhere!",
    },
    {
      name: "Priya Sharma",
      role: "Home Chef",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop",
      rating: 5,
      text: "The curated recommendations make Flavor Hub stand out. I've discovered so many hidden gems through this amazing platform!",
    },
    {
      name: "David Kim",
      role: "Food Critic",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop",
      rating: 5,
      text: "Professional, reliable, and user-friendly. The quality of reviews and community engagement is truly unmatched in the industry!",
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent">
            What Our Community Says
          </h2>
          <p className="text-base sm:text-lg text-base-content/70 max-w-2xl mx-auto">
            Real stories from food lovers who trust Flavor Hub
          </p>
        </div>

        {/* Testimonials Coverflow Carousel */}
        <div className="testimonials-coverflow-container">
          <Swiper
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            coverflowEffect={{
              rotate: 30,
              stretch: "50%",
              depth: 200,
              modifier: 1,
              scale: 0.75,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-base-200 rounded-3xl p-6 sm:p-8 shadow-xl h-full flex flex-col">
                  {/* Opening Quote */}
                  <div className="flex justify-start mb-3">
                    <FaQuoteLeft className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
                  </div>

                  {/* Profile Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-orange-500 shadow-lg object-cover"
                    />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base-content text-sm sm:text-base leading-relaxed mb-4 text-center flex-grow">
                    {testimonial.text}
                  </p>

                  {/* Closing Quote */}
                  <div className="flex justify-end mb-4">
                    <FaQuoteRight className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
                  </div>

                  {/* Author Info */}
                  <div className="text-center border-t border-base-content/10 pt-4">
                    <h4 className="font-bold text-base sm:text-lg text-base-content mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-orange-600 font-semibold mb-2">
                      {testimonial.role}
                    </p>
                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        :global(.testimonials-swiper) {
          padding: 40px 20px 60px;
        }

        :global(.testimonials-coverflow-container) {
          max-width: 100%;
          overflow: hidden;
        }

        :global(.testimonials-swiper .swiper-slide) {
          background-position: center;
          background-size: cover;
          height: auto;
          min-height: 400px;
        }

        :global(.testimonials-swiper .swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        :global(.testimonials-swiper .swiper-pagination-bullet-active) {
          width: 24px;
          border-radius: 5px;
          background: linear-gradient(to right, #f97316, #ef4444);
        }

        @media (max-width: 640px) {
          :global(.testimonials-swiper) {
            padding: 20px 10px 50px;
          }

          :global(.testimonials-swiper .swiper-slide) {
            min-height: 450px;
          }

          :global(.testimonials-swiper .swiper-pagination-bullet) {
            width: 8px;
            height: 8px;
          }
          
          :global(.testimonials-swiper .swiper-pagination-bullet-active) {
            width: 20px;
          }
        }

        @media (min-width: 1024px) {
          :global(.testimonials-swiper) {
            padding: 50px 30px 70px;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;