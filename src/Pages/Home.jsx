import React from "react";
import FeaturedReview from "./FeaturedReview";
import HeroSlider from "../components/HeroSlider";
import ChooseUs from "../components/ChooseUs";
import PopularDishes from "../components/PopularDishes";

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

      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
