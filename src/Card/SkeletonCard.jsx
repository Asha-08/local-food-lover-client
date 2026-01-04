import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse space-y-3 p-4 border rounded-lg bg-base-200">
      <div className="w-full h-40 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    </div>
  );
};

export default SkeletonCard;
