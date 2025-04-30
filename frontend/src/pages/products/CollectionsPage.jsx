import React from "react";

const collections = [
  {
    name: "New Arrivals",
    image:
      "https://5.imimg.com/data5/XQ/ML/TL/SELLER-69111335/high-quality-mens-long-sleeve-shirts1.jpg",
  },
  { name: "Best Sellers", image: "https://example.com/best-sellers.jpg" },
  { name: "T-Shirts & Polos", image: "https://example.com/tshirts.jpg" },
  { name: "Shirts Collection", image: "https://example.com/shirts.jpg" },
  { name: "Jeans & Pants", image: "https://example.com/jeans.jpg" },
  { name: "Ethnic Wear", image: "https://example.com/ethnic.jpg" },
  { name: "Activewear", image: "https://example.com/activewear.jpg" },
  { name: "Outerwear", image: "https://example.com/outerwear.jpg" },
  { name: "Footwear", image: "https://example.com/footwear.jpg" },
  { name: "Accessories", image: "https://example.com/accessories.jpg" },
];

const CollectionsPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Men's Clothing Collections
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collections.map((collection, index) => (
          <div
            key={index}
            className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-lg font-semibold">
                {collection.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
