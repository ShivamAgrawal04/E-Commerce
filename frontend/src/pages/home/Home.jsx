import React, { useState } from "react";
import Hero from "./Hero";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

const Home = () => {
  const [total, setTotal] = useState(0);

  return (
    <>
      <div>
        <Hero />
      </div>
      {/* <div className="h-[calc(100vh-140px)] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        <div className="w-full md:w-1/2 text-center md:text-left space-y-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Men's Collection
            </h3>
            <h1 className="text-5xl font-bold leading-tight">
              Men's <span className="text-blue-600">Exclusive</span> Collection
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Elevate your wardrobe with <strong>trendy & premium</strong>{" "}
              styles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex space-x-4 mt-6"
          >
            <Link
              to="/products"
              className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 flex items-center space-x-2 transition-all duration-300"
            >
              <span>Shop Now</span> <FaArrowRight />
            </Link>
            <button className="p-3 border border-gray-400 rounded-full hover:bg-gray-200 transition-all duration-300">
              <FaArrowLeft />
            </button>
            <button className="p-3 border border-gray-400 rounded-full hover:bg-gray-200 transition-all duration-300">
              <FaArrowRight />
            </button>
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex space-x-4 justify-end"
        >
          <img
            src="https://images.unsplash.com/photo-1606913852449-8ebf553565cf?w=500&auto=format&fit=crop&q=60"
            alt="Men's Fashion"
            className="w-1/2 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            onError={(e) => (e.target.src = "https://via.placeholder.com/250")}
          />
          <img
            src="https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=500&auto=format&fit=crop&q=60"
            alt="Men's Fashion"
            className="w-1/2 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            onError={(e) => (e.target.src = "https://via.placeholder.com/250")}
          />
        </motion.div>
      </div>*/}
      <div className="bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-7xl">
          <h3 className="relative inline-block text-3xl tracking-tight sm:text-4xl font-bold">
            New <br /> This Week{" "}
            <span className="absolute top-0 sm:top-6 left-20 sm:left-41 text-blue-800 font-bold text-sm sm:text-2xl">
              ({total})
            </span>
          </h3>
          <p className="text-right text-sm sm:text-base py-2">See All</p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href} className="text-sm font-medium">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 "
                        />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm  text-gray-600">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-screen px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center text-center pt-10 pb-20">
        <div>
          <h4 className="text-3xl md:text-4xl font-bold text-black mb-4">
            OUR APPROACH TO FASHION DESIGN
          </h4>
          <p className="text-base leading-relaxed w-full max-w-2xl text-gray-600 mx-auto mb-10">
            At Elegant Vogue, we blend creativity with craftsmanship to create
            fashion that transcends trends and stands the test of time. Each
            design is meticulously crafted, ensuring the highest quality and
            exquisite finish.
          </p>
        </div>
        {/* Use grid layout to wrap images on smaller devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <img
            src="https://images.unsplash.com/photo-1715418554358-d34e420b18ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb24lMjBtYW58ZW58MHx8MHx8fDA%3D"
            alt="Fashion Design 1"
            className="object-cover w-full h-auto"
          />
          <img
            src="https://images.unsplash.com/photo-1706212825296-b2bebf3de002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb24lMjBtYW58ZW58MHx8MHx8fDA%3D"
            alt="Fashion Design 2"
            className="mt-0 md:mt-15"
          />
          <img
            src="https://images.unsplash.com/photo-1715418554358-d34e420b18ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb24lMjBtYW58ZW58MHx8MHx8fDA%3D"
            alt="Fashion Design 3"
            className="object-cover w-full h-auto"
          />
          <img
            src="https://images.unsplash.com/photo-1706212825296-b2bebf3de002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb24lMjBtYW58ZW58MHx8MHx8fDA%3D"
            alt="Fashion Design 4"
            className="mt-0 md:mt-15 object-cover h-auto w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

// Latest arrivals and trending products
// Promotional offers or discounts
// Call-to-action buttons like "Shop Now", "Explore Collections"
