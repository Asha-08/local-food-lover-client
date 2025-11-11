import React from 'react'
import { Link, useLoaderData } from 'react-router'
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
      <div className="my-8 flex justify-center">
                  <Link
                    to="/"
                    className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-linear-to-r from-orange-500 to-red-500 hover:from-red-500 hover:to-orange-500 transition-colors"
                  >
                    ← Go Back Home
                  </Link>
                </div>
    </div>
  )
}

export default AllReviews