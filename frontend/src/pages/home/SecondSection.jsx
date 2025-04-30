import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const SecondSection = () => {
  const [total, setTotal] = useState(0);
  const items = [1, 2, 3, 4]; // Dummy items to map over

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-15">
      <div className="w-full max-w-7xl">
        {/* Section Title */}
        <h3 className="relative inline-block text-3xl sm:text-4xl font-bold">
          New <br /> This Week{" "}
          <span className="absolute top-0 sm:top-6 left-20 sm:left-41 text-blue-800 font-bold text-sm sm:text-2xl">
            ({total})
          </span>
        </h3>
        <p className="text-right text-sm sm:text-base py-2">See All</p>

        {/* Product Cards Container */}
        <div className="flex justify-between items-center space-x-6 ">
          {items.map((item) => (
            <div key={item} className="w-full sm:w-1/2 md:w-1/4">
              <img
                src="https://plus.unsplash.com/premium_photo-1673125287363-b4e837f1215f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMjBtYW58ZW58MHx8MHx8fDA%3D"
                alt="Fashion"
                className="w-full h-auto object-cover rounded-md"
              />
              <div className="flex justify-between items-end mt-2">
                <div>
                  <label className="block text-sm font-medium">
                    V-Neck T-Shirt
                  </label>
                  <p className="text-xs text-gray-600">
                    Embroidered seersucker Shirt
                  </p>
                </div>
                <label className="text-sm font-bold">$99</label>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex space-x-2 justify-center">
          <button className="p-2 border border-gray-400 rounded">
            <FaArrowLeft />
          </button>
          <button className="p-2 border border-gray-400 rounded">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
