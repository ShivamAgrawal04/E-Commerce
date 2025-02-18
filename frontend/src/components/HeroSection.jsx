import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaSearch,
  FaArrowRight,
  FaArrowLeft,
  FaSync,
  FaCamera,
} from "react-icons/fa";
import { useState } from "react";

const HeroSection = () => {
  return (
    <div className="px-6">
      <ul className="text-gray-500 text-md">
        <li className="cursor-pointer">MEN</li>
        <li className="cursor-pointer">WOMEN</li>
        <li className="cursor-pointer">KIDS</li>
      </ul>

      {/* Search Bar */}
      <div className="mt-4 w-64">
        <div className="flex items-center border border-gray-300 px-4 py-2 rounded-lg">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 outline-none w-full bg-transparent"
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="mt-8 grid grid-cols-3 gap-6 items-center">
        {/* Left: Collection Text */}
        <div>
          <h1 className="text-4xl font-bold">
            NEW <br /> COLLECTION
          </h1>
          <p className="text-gray-600 mt-2">Summer 2024</p>
          <button className="mt-4 px-6 py-2 bg-black text-white flex items-center space-x-2">
            <span>Go To Shop</span>
            <FaArrowRight />
          </button>
        </div>

        {/* Center & Right: Product Images */}
        <div className="col-span-2 flex space-x-6">
          <img
            src="https://source.unsplash.com/300x400/?fashion,men"
            alt="Fashion"
            className="w-64 h-80 object-cover"
          />
          <img
            src="https://source.unsplash.com/300x400/?fashion,women"
            alt="Fashion"
            className="w-64 h-80 object-cover"
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="mt-4 flex space-x-2">
        <button className="p-2 border border-gray-400">
          <FaArrowLeft />
        </button>
        <button className="p-2 border border-gray-400">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
