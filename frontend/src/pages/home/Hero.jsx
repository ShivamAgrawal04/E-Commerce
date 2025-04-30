import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [circles, setCircles] = useState([]);
  const [isHoverd, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true); // Set to true when mouse enters
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Set to false when mouse leaves
  };

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const heroImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80",
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  useEffect(() => {
    if (containerSize.width === 0 || containerSize.height === 0) return;

    const newCircles = Array.from({ length: 20 }, () => ({
      x: Math.random() * containerSize.height,
      y: Math.random() * containerSize.width,
      size: Math.random() * 200 + 10,
    }));
    setCircles(newCircles);
  }, [containerSize]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden bg-white rounded-xl mx-auto py-6"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100"></div>
        {circles.map((pos, i) => (
          <motion.div
            key={i}
            className={`absolute w-[200px] h-[200px] ${
              isHoverd ? "blur-sm" : ""
            } rounded-full bg-gradient-to-r from-blue-300/60 to-purple-300/60 
              
          `}
            style={{ width: `${pos.size}px`, height: `${pos.size}px` }}
            initial={{
              x: pos.x,
              y: pos.y,
              scale: 1,
            }}
            animate={{
              x: pos.x + 60,
              y: pos.y + 90,
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content and Image Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[79vh] grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div className="space-y-6">
              {/* Badge */}
              <motion.div
                className="relative inline-flex group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <span className="relative px-5 py-2 bg-white text-gray-900 rounded-full shadow-lg">
                  Spring Collection 2025
                </span>
              </motion.div>

              {/* Headings */}
              <div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <motion.h1
                  className="text-6xl md:text-7xl font-bold text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Elevate Your{" "}
                  <motion.span
                    className="block text-transparent pb-3 bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 1 }}
                  >
                    Style Game
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="text-xl text-gray-600 max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 1 }}
                >
                  Discover the perfect blend of contemporary fashion and
                  timeless elegance.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1 }}
              >
                <Link
                  to="/products"
                  className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full bg-gray-900 text-white transition-transform hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative flex items-center space-x-2">
                    <span>Explore Collection</span>
                    <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>

                <button className="px-8 py-4 rounded-full border-2 border-gray-900 text-gray-900 hover:bg-gray-100 transition duration-300">
                  Watch Showcase
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Image Section with cross-fade transition */}
          <div className="relative h-[600px] ">
            <div className="absolute inset-0">
              {heroImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Fashion Current"
                  className={`w-full h-full object-cover rounded-3xl
                  transition-opacity duration-600 ease-in-out ${
                    index === currentImage ? "opacity-100" : "opacity-0"
                  }
                `}
                />
              ))}

              <div className="absolute inset-0 bg-gray-50/20 rounded-3xl shadow-2xl"></div>

              {/* Stats overlay */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between">
                <div
                  className="bg-white/90 rounded-xl p-4 text-gray-900 shadow-lg 
                  transition-all duration-600 ease-in-out transform"
                >
                  <div className="text-2xl font-bold">2025</div>
                  <div className="text-sm">Collection</div>
                </div>
                <div
                  className="backdrop-blur-md bg-white/90 rounded-xl p-4 text-gray-900 shadow-lg 
                  transition-all duration-600 ease-in-out transform"
                >
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm">New Styles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
