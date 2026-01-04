import React from "react";
import FeaturedReview from "./FeaturedReview";
import HeroSlider from "../components/HeroSlider";
import ChooseUs from "../components/ChooseUs";
import PopularDishes from "../components/PopularDishes";
import Testimonials from "../components/Testimonials";
import Statistics from "../components/Statistics";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";

const featuredReviewPromise = fetch(
  "https://local-food-server-pi.vercel.app/featured-reviews"
).then((res) => res.json());
const Home = () => {
  return (
    <div>
      <HeroSlider></HeroSlider>
      <PopularDishes></PopularDishes>
      <FeaturedReview
        featuredReviewPromise={featuredReviewPromise}
      ></FeaturedReview>
      <Testimonials></Testimonials>
      <ChooseUs></ChooseUs>
      <Statistics></Statistics>
      <HowItWorks></HowItWorks>
      <Features></Features>
      <FAQ></FAQ>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
