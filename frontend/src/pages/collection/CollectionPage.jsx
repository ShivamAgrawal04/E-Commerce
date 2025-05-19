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
    image:
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFudHxlbnwwfHwwfHx8MA%3D%3D",
    link: "/collections/pants",
  },
  {
    name: "Jackets",
    description: "Layer up with our premium jackets.",
    image:
      "https://thumbs.dreamstime.com/b/male-black-crown-clothes-hanger-store-new-collection-different-color-spring-leather-jackets-men-close-up-197115953.jpg?w=1400",
    link: "/collections/jackets",
  },
  {
    name: "T-Shirts",
    description: "Casual and cool T-Shirts.",
    image:
      "https://img.freepik.com/premium-photo/colorful-tshirts-collection-lined-up-concept-material-mockup-banner-concept-background-wallpaper-ai-generated-image_1087980-3087.jpg",
    link: "/collections/tshirts",
  },
  {
    name: "Sherwanis",
    description: "Traditional elegance for weddings and celebrations.",
    image:
      "https://i.ytimg.com/vi/E4o8fbd61x8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAuQFZJNGFaaPA3xkwUXb6Ck7HMWw",
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
