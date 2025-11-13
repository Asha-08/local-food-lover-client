import React, { use } from 'react'
import FeatureCard from '../Card/FeatureCard';
import { Link } from 'react-router';

const FeaturedReview = ({featuredReviewPromise}) => {
   const featured = use(featuredReviewPromise);
   console.log(featured);
  return (
    <div>
         <div className='text-4xl text-center font-bold bg-linear-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent my-10'>Featured Reviews</div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
            featured.map(review=> <FeatureCard key={review._id} review={review}></FeatureCard>)
        }
        </div>
         <div className="flex justify-center mt-8">
        <Link
          to="/all-reviews"
          className="px-6 py-3 rounded-full font-semibold text-white bg-linear-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition-colors"
        >
          Show All
        </Link>
      </div>
    </div>
  )
}

export default FeaturedReview