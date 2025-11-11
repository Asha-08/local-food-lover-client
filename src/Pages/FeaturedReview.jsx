import React, { use } from 'react'
import FeatureCard from '../Card/FeatureCard';

const FeaturedReview = ({featuredReviewPromise}) => {
   const featured = use(featuredReviewPromise);
   console.log(featured);
  return (
    <div>
         <div className='text-2xl text-center font-bold'>Featured Reviews</div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
            featured.map(review=> <FeatureCard key={review._id} review={review}></FeatureCard>)
        }
        </div>
    </div>
  )
}

export default FeaturedReview