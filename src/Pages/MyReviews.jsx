import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'

const MyReviews = () => {
  const {user} = use(AuthContext);
  const [myReview,setMyReview] = useState([])

  useEffect(()=>{
    if(user?.email){
      fetch(`http://localhost:3000/my-reviews?email=${user.email}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        setMyReview(data)
      })
    }
  },[user?.email])
  return (
    <div>
      <h3>My Review: {myReview.length}</h3>
       <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">My Reviews</h2>

      <div className="hidden md:block shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full bg-white border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">
                Food Image
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">
                Food Name
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">
                Restaurant Name
              </th>
              <th className="py-3 px-4 text-left text-gray-700 font-medium border-b">
                Posted Date
              </th>
              <th className="py-3 px-4 text-center text-gray-700 font-medium border-b">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {
              myReview.map(review => <tr key={review._id} review={review}className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b">
                <img
                  src={review.photo}
                  alt="Food"
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>
              <td className="py-3 px-4 border-b">{review.foodName}</td>
              <td className="py-3 px-4 border-b">{review.restaurantName}</td>
              <td className="py-3 px-4 border-b">{new Date(review.createdAt).toLocaleDateString()}</td>
              <td className="py-3 px-4 border-b text-center">
                <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600">
                  Edit
                </button>
                <button className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>)
            }

           

            {/* You can duplicate <tr> as needed */}
          </tbody>
        </table>
      </div>
        {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {myReview.map((review) => (
          <div key={review._id} className="p-4 border rounded-lg shadow-sm bg-white flex flex-col gap-2">
            <img
              src={review.photo}
              alt={review.foodName}
              className="w-full h-40 object-cover rounded-md"
            />
            <p><strong>Food:</strong> {review.foodName}</p>
            <p><strong>Restaurant:</strong> {review.restaurantName}</p>
            <p><strong>Posted:</strong> {new Date(review.createdAt).toLocaleDateString()}</p>
            <div className="flex gap-2 mt-2">
              <button className="flex-1 px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Edit
              </button>
              <button className="flex-1 px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MyReviews