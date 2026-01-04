import React from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';

const PopularDishes = () => {
  const dishes = [
    { 
      name: "Prawn Biriyani", 
      description: "Delicious prawn biriyani with aromatic spices and fragrant basmati rice.", 
      img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop",
      rating: 4.8,
      reviews: 234
    },
    { 
      name: "Spicy Ramen", 
      description: "Hot ramen with authentic flavors, tender noodles and spicy kick.", 
      img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&auto=format&fit=crop",
      rating: 4.9,
      reviews: 456
    },
    { 
      name: "Mutton Curry", 
      description: "Tender mutton curry cooked to perfection with rich spices.", 
      img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&auto=format&fit=crop",
      rating: 4.7,
      reviews: 189
    },
    { 
      name: "Chicken Tikka", 
      description: "Grilled chicken marinated in yogurt and traditional spices.", 
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&auto=format&fit=crop",
      rating: 4.6,
      reviews: 312
    },
    { 
      name: "Sushi Platter", 
      description: "Fresh sushi rolls with premium fish and authentic Japanese rice.", 
      img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&auto=format&fit=crop",
      rating: 4.9,
      reviews: 567
    },
    { 
      name: "Beef Burger", 
      description: "Juicy beef patty with melted cheese and special house sauce.", 
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop",
      rating: 4.5,
      reviews: 423
    },
    { 
      name: "Margherita Pizza", 
      description: "Classic Italian pizza with fresh mozzarella and basil.", 
      img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop",
      rating: 4.7,
      reviews: 289
    },
    { 
      name: "Pad Thai", 
      description: "Traditional Thai stir-fried noodles with tangy tamarind sauce.", 
      img: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&auto=format&fit=crop",
      rating: 4.8,
      reviews: 345
    },
  ];
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent">
            Popular Dishes
          </h2>
          <p className="text-base sm:text-lg dark:text-gray-400  max-w-2xl mx-auto">
            Discover our most loved dishes, reviewed by food enthusiasts
          </p>
        </div>

        {/* Auto-Scrolling Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={5000}
            freeMode={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="popular-dishes-swiper"
          >
            {dishes.map((dish, idx) => (
              <SwiperSlide key={idx}>
                <div className="group  rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={dish.img} 
                      alt={dish.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                      {dish.rating}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <h3 className="font-bold  text-lg sm:text-xl mb-2  group-hover:text-orange-600 transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-3 line-clamp-2">
                      {dish.description}
                    </p>
                    
                    {/* Reviews Count */}
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        {dish.reviews} reviews
                      </span>
                      
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gradient Overlays for Infinite Effect */}
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-base-200 to-transparent z-10 pointer-events-none" />
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-base-200 to-transparent z-10 pointer-events-none" />
        </div>

       
       
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        :global(.popular-dishes-swiper) {
          padding: 10px 0;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default PopularDishes;