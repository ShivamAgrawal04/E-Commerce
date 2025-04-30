import React from "react";
import { Link } from "react-router-dom";

const collections = [
  {
    name: "Shirts",
    description: "Stylish shirts for every occasion.",
    image:
      "https://5.imimg.com/data5/XQ/ML/TL/SELLER-69111335/high-quality-mens-long-sleeve-shirts1.jpg",
    link: "/collections/shirts",
  },
  {
    name: "Pants",
    description: "Comfortable and trendy pants.",
    image: "/images/collections/pants.jpg",
    link: "/collections/pants",
  },
  {
    name: "Jackets",
    description: "Layer up with our premium jackets.",
    image: "/images/collections/jackets.jpg",
    link: "/collections/jackets",
  },
  {
    name: "T-Shirts",
    description: "Casual and cool T-Shirts.",
    image: "/images/collections/tshirts.jpg",
    link: "/collections/tshirts",
  },
  {
    name: "Accessories",
    description: "Belts, wallets, sunglasses & more.",
    image: "/images/collections/accessories.jpg",
    link: "/collections/accessories",
  },
];

const CollectionPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Shop by Collection
        </h1>
        <p className="text-gray-600 mb-12">
          Discover SharpFit’s curated collections tailored to elevate your
          wardrobe.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link to={collection.link} key={index} className="group">
              <div className="overflow-hidden rounded-2xl shadow hover:shadow-lg transition duration-300 bg-white">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {collection.name}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
