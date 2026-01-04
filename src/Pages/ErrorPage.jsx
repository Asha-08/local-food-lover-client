import React from "react";
import { NavLink } from "react-router";
// import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      
      <div className="max-w-5xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto lg:mx-0">
            Oops! The page you are looking for seems to have wandered off. 
            You can return to the homepage or explore other sections.
          </p>
          <NavLink
            to="/"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
          >
            Go to Homepage
          </NavLink>
        </div>

        

      </div>

      {/* Optional subtle floating circles */}
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-orange-300 dark:bg-orange-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/3 w-48 h-48 bg-purple-300 dark:bg-purple-500 opacity-15 rounded-full blur-3xl animate-pulse"></div>
    </div>
  );
};

export default ErrorPage;
