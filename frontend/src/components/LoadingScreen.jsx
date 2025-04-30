import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  const loadingTexts = [
    "Preparing Awesomeness...",
    "Crafting Excellence...",
    "Loading Perfection...",
    "Almost Ready...", // This will be the final text
  ];

  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate the loading process
    const interval = setInterval(() => {
      if (index < loadingTexts.length - 1) {
        setIndex((prev) => prev + 1); // Cycle through the loading texts
      }
    }, 2000); // Change every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-8">
        {/* Spinner */}
        {loading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            className="w-14 h-14 border-4 border-gray-300 border-t-blue-500 rounded-full"
          ></motion.div>
        )}

        {/* Loading Text */}
        <div className="h-8 overflow-hidden">
          <motion.div
            key={loading ? loadingTexts[index] : "almostReady"} // Show "Almost Ready..." when loading is done
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-800 text-xl font-medium"
          >
            {loading ? loadingTexts[index] : "Almost Ready..."}{" "}
            {/* Change text when loading is true */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
