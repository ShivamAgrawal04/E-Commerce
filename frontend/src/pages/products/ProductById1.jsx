import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../store/slice/productSlice";
import { motion } from "framer-motion"; // Make sure to install framer-motion

const ProductById1 = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading } = useSelector((state) => state.product);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProductById(id));
    console.log(selectedProduct);
  }, [dispatch, id]);

  if (loading || !selectedProduct) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const sizes = ["S", "M", "L", "XL", "XXL", "3XL"];
  const colors = ["blue", "green", "black", "pink"];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // Add these constants for the collapsible sections
  const shippingInfo = `
  Free standard shipping on orders over $100
  Estimated delivery time: 3-5 business days
  Express shipping available at checkout
  International shipping available to select countries
  `;

  const detailsInfo = `
  Material: Premium cotton blend
  Care instructions: Machine wash cold, tumble dry low
  Imported
  Style: Regular fit
  Model is wearing size M
  `;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full h-[98vh] max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="h-full flex gap-6"
        >
          {/* Thumbnail Column */}
          <div className="flex flex-col gap-4 overflow-y-auto pr-2 hide-scrollbar">
            {selectedProduct.images?.map((image, index) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={index}
                onClick={() => setMainImage(index)}
                className={`w-16 h-16 flex-shrink-0 border rounded-md overflow-hidden transition-all duration-300 ${
                  mainImage === index
                    ? "border-blue-500 shadow-lg"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </motion.button>
            ))}
          </div>

          {/* Main Image */}
          <motion.div
            layoutId="mainImage"
            className="flex-1 relative rounded-xl h-[80vh] overflow-hidden shadow-2xl"
          >
            <img
              src={
                selectedProduct.images?.[mainImage] || selectedProduct.thumbnail
              }
              alt={selectedProduct.title}
              className="w-full h-full object-cover rounded-lg transition-all duration-500"
            />
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  setMainImage((prev) =>
                    prev > 0 ? prev - 1 : images.length - 1
                  )
                }
                className="bg-white/90 rounded-full p-3 hover:bg-white shadow-lg transition-all duration-300"
              >
                ←
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  setMainImage((prev) => (prev + 1) % images.length)
                }
                className="bg-white/90 rounded-full p-3 hover:bg-white shadow-lg transition-all duration-300"
              >
                →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Product Details */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="h-full overflow-y-auto pr-4 hide-scrollbar"
        >
          <div className="space-y-6 pl-5">
            {/* Product Title and Price */}
            <div>
              <div className="flex justify-between">
                <motion.h1
                  {...fadeIn}
                  className="text-3xl font-bold text-gray-900"
                >
                  {selectedProduct.title}
                </motion.h1>
                <motion.div
                  {...fadeIn}
                  className="flex items-center gap-2 mt-2"
                >
                  <span className="text-yellow-400 text-xl">⭐</span>
                  <span className="text-gray-700">
                    {selectedProduct.rating}
                  </span>
                </motion.div>
              </div>
              <motion.p
                {...fadeIn}
                className="text-2xl font-semibold text-gray-800 mt-3"
              >
                ${selectedProduct.price}
              </motion.p>
            </div>

            {/* Color Selection */}
            <motion.div {...fadeIn}>
              <h3 className="font-medium mb-3 text-gray-800">Select Color</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-10 h-10 rounded-full transition-transform duration-300 ${
                      selectedColor === color
                        ? "ring-2 ring-offset-2 ring-gray-800"
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Size Selection */}
            <motion.div {...fadeIn}>
              <h3 className="font-medium mb-3 text-gray-800">Select Size</h3>
              <div className="grid grid-cols-6 gap-2">
                {sizes.map((size) => (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 border rounded-lg transition-all duration-300 ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-black text-gray-700"
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Quantity */}
            <motion.div {...fadeIn}>
              <h3 className="font-medium mb-3 text-gray-800">Quantity</h3>
              <div className="flex items-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="border rounded-lg p-3 hover:bg-gray-100 transition-colors duration-300"
                >
                  −
                </motion.button>
                <span className="text-xl font-medium w-8 text-center">
                  {quantity}
                </span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="border rounded-lg p-3 hover:bg-gray-100 transition-colors duration-300"
                >
                  +
                </motion.button>
              </div>
            </motion.div>

            {/* Add to Cart & Buy Now */}
            <motion.div {...fadeIn} className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 border-2 border-black py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium"
              >
                Add to cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 font-medium"
              >
                Buy it now
              </motion.button>
            </motion.div>

            {/* Collapsible Sections */}
            <div className="space-y-4 mt-8">
              {/* Description */}
              <div className="border-t pt-4">
                <button
                  onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                  className="flex justify-between items-center w-full py-2 text-left group"
                >
                  <span className="font-medium text-gray-800">Description</span>
                  <motion.span
                    animate={{ rotate: isDescriptionOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600"
                  >
                    ↓
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isDescriptionOpen ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 py-4">
                    {selectedProduct.description}
                  </p>
                </motion.div>
              </div>

              {/* Shipping & Returns */}
              <div className="border-t pt-4">
                <button
                  onClick={() => setIsShippingOpen(!isShippingOpen)}
                  className="flex justify-between items-center w-full py-2 text-left group"
                >
                  <span className="font-medium text-gray-800">
                    Shipping & Returns
                  </span>
                  <motion.span
                    animate={{ rotate: isShippingOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600"
                  >
                    ↓
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isShippingOpen ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 py-4 whitespace-pre-line">
                    {shippingInfo}
                  </p>
                </motion.div>
              </div>

              {/* Product Details */}
              <div className="border-t pt-4">
                <button
                  onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                  className="flex justify-between items-center w-full py-2 text-left group"
                >
                  <span className="font-medium text-gray-800">
                    Product Details
                  </span>
                  <motion.span
                    animate={{ rotate: isDetailsOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600"
                  >
                    ↓
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isDetailsOpen ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 py-4 whitespace-pre-line">
                    {detailsInfo}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductById1;
