import React from 'react'
import { NavLink } from 'react-router';

const ErrorPage = () => {
    const floatingFood = ["🍔", "🍕", "🥗", "🥤", "🍟"];
  return (
     <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-orange-200 to-red-200 overflow-hidden">
      
      {/* Floating food emojis */}
      {floatingFood.map((food, idx) => (
        <div
          key={idx}
          className={`absolute text-3xl sm:text-2xl animate-bounce`}
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          {food}
        </div>
      ))}

      {/* Main content */}
      <div className="z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-6xl sm:text-5xl md:text-7xl font-extrabold text-red-600 animate-pulse">
          Oops! 🔥
        </h1>
        <h2 className="text-3xl sm:text-2xl md:text-4xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-700 mt-2 mb-6 max-w-md">
          The page you are looking for is lost in our kitchen… but we can bring you back!
        </p>
        <NavLink
          to="/"
          className="px-6 py-3 text-white font-semibold rounded-lg bg-linear-to-r from-purple-600 to-orange-500 hover:from-orange-500 hover:to-purple-600 transition-all duration-300"
        >
          Go Back to Safety
        </NavLink>
      </div>

      {/* Optional background spark/flare */}
      <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full bg-yellow-200 opacity-20 blur-3xl -translate-x-1/2 animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-orange-200 opacity-20 blur-2xl animate-pulse"></div>
    </div>
  )
}

export default ErrorPage