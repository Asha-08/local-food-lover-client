import React from 'react'


import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { SwiperSlide,Swiper } from 'swiper/react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1673006768205-b9a7bc6842a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    heading: 'Delicious & Fresh',
    subtext: 'Taste the best food in town',
    buttonText: 'View Menu',
  },
  {
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D',
    heading: 'Savour Every Bite',
    subtext: 'Made with love and care',
    buttonText: 'Order Now',
  },
  {
    image: 'https://images.pexels.com/photos/11129150/pexels-photo-11129150.png',
    heading: 'Healthy & Tasty',
    subtext: 'Food that cares for you',
    buttonText: 'Explore Dishes',
  },
  {
    image: 'https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg',
    heading: 'Classic Flavours',
    subtext: 'Timeless recipes, timeless taste',
    buttonText: 'See More',
  },
  {
    image: 'https://images.pexels.com/photos/1343504/pexels-photo-1343504.jpeg',
    heading: 'Fresh Ingredients',
    subtext: 'From farm to plate',
    buttonText: 'Get Started',
  },
];

const HeroSlider = () => {
  return (
     <div className="hero-slider-container relative z-0">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="slide-item"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '70vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                position: 'relative',
                borderRadius:'20px',
              }}
            >
              <div className="overlay" style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.4)',
              }} />
              <div style={{
                position: 'relative',
                zIndex: 2,
                padding: '0 20px',
              }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{slide.heading}</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{slide.subtext}</p>
                <button style={{
                  padding: '0.8rem 2rem',
                  fontSize: '1rem',
                  backgroundColor: '#ff6347',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  borderRadius: '5px',
                }}>
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSlider