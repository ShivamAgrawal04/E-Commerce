import React, { useState } from "react";

// Example of items in the wishlist (replace with actual data from API or local storage)
const wishlistItems = [
  {
    id: 1,
    name: "Slim Fit Shirt",
    image: "https://example.com/slim-fit-shirt.jpg",
    price: 1200,
  },
  {
    id: 2,
    name: "Cotton Polo T-shirt",
    image: "https://example.com/cotton-polo.jpg",
    price: 950,
  },
  {
    id: 3,
    name: "Blue Jeans",
    image: "https://example.com/blue-jeans.jpg",
    price: 1500,
  },
  // Add more items as needed
];

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState(wishlistItems);

  // Remove an item from the wishlist
  const handleRemove = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-lg text-center">
          Your wishlist is empty. Start adding items!
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-semibold">
                  {item.name}
                </span>
                <span className="text-white text-sm mt-2">${item.price}</span>
                <div className="flex gap-4 mt-4">
                  <button
                    className="text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-md"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                  <button className="text-white bg-secondary hover:bg-secondary/80 px-4 py-2 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
