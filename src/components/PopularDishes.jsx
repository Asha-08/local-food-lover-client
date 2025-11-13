import React from 'react'
import PrawnBiriyani from "../assets/Prawn-biriyani.jpg";
import Ramen from "../assets/Ramen-noodle.jpg";
import mutton from "../assets/mutton.jpg";
const PopularDishes = () => {
    const dishes = [
    { name: "Prawn Biriyani", description: "Delicious prawn biriyani with aromatic spices.", img: PrawnBiriyani },
    { name: "Spicy Ramen", description: "Hot ramen with authentic flavors and spicy kick.", img: Ramen },
    { name: "Mutton Curry", description: "Tender mutton curry cooked to perfection.", img: mutton },
  ];
  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-8 text-center bg-linear-to-r from-indigo-700 via-red-500 to-orange-500 bg-clip-text text-transparent">Popular Dishes</h2>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dishes.map((dish, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img src={dish.img} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{dish.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularDishes