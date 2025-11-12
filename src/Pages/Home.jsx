import React from 'react'
import FeaturedReview from './FeaturedReview'
import HeroSlider from '../components/HeroSlider'

const featuredReviewPromise = fetch('http://localhost:3000/featured-reviews').then(res =>res.json())
const Home = () => {
  return (
    <div>Home
      <HeroSlider></HeroSlider>
      <FeaturedReview featuredReviewPromise={featuredReviewPromise}></FeaturedReview>
    </div>
  )
}

export default Home