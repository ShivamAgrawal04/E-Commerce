import React from "react";

import { useState } from "react";
const AddItems = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files.map((file) => URL.createObjectURL(file)));
  };
  return (
    <>
      {/* Main Content */}
      <div className="flex-1 p-10 pl-15">
        <h2 className="text-xl font-bold mb-4">Upload Product</h2>

        {/* Upload Images */}
        <div className="flex flex-wrap gap-2  mb-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="product"
              className="w-20 h-20 object-cover rounded"
            />
          ))}
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer w-20 h-20 flex items-center justify-center bg-gray-200 rounded"
          >
            +
          </label>
        </div>

        {/* Product Details */}
        <input
          type="text"
          placeholder="Product name"
          className="w-full border rounded p-2 mb-2"
        />
        <textarea
          placeholder="Product description"
          className="w-full border rounded p-2 mb-2"
        ></textarea>

        {/* Category and Price */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          <select className="border rounded p-2">
            <option>Men</option>
            <option>Women</option>
          </select>
          <select className="border rounded p-2">
            <option>Topwear</option>
            <option>Bottomwear</option>
          </select>
          <input
            type="number"
            placeholder="Price"
            className="border rounded p-2"
          />
        </div>

        {/* Sizes */}
        <div className="flex gap-2 mb-2">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              key={size}
              className="border px-4 py-2 rounded hover:bg-gray-200"
            >
              {size}
            </button>
          ))}
        </div>

        {/* Bestseller Checkbox */}
        <div className="flex items-center gap-2 mb-4">
          <input type="checkbox" id="bestseller" />
          <label htmlFor="bestseller">Add to Bestseller</label>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          ADD
        </button>
      </div>
    </>
  );
};

export default AddItems;
