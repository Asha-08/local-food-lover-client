import React from 'react'
import { useLoaderData } from 'react-router'
import ReviewsCard from '../Card/ReviewsCard'

const AllReviews = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <div className='text-2xl text-center font-bold'>All Reviews</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {
          data.map((review)=>(<ReviewsCard key={review._id} review={review}></ReviewsCard>))
        }

      </div>
    </div>
  )
}

export default AllReviews