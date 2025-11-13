import React from 'react'

const ChooseUs = () => {
    const features = [
    { title: "Fresh Ingredients", icon: "🍓" },
    { title: "Fast Delivery", icon: "🚀" },
    { title: "Customer Satisfaction", icon: "😊" },
    { title: "Affordable Prices", icon: "💰" },
  ];
  return (
     <section className=" text-gray-100 py-12 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent">Why Choose Flavor Hub?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-gray-800 rounded-lg shadow hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChooseUs