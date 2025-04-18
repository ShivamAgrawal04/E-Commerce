import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../store/slice/productSlice";

const ProductById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);
  if (loading || !selectedProduct) return <h2>Loading...</h2>;

  const totalThumbnails = selectedProduct.images.length;
  let thumbnailsToShow = [];
  let extraCount = 0;

  if (totalThumbnails <= 4 || totalThumbnails === 5) {
    // Display all thumbnails normally if 4 or 5 images
    thumbnailsToShow = selectedProduct.images;
  } else if (totalThumbnails > 5) {
    // Show first 4 thumbnails and display extra block for remaining images
    thumbnailsToShow = selectedProduct.images.slice(0, 4);
    extraCount = totalThumbnails - 4;
  }

  return (
    <div className="min-h-[calc(100vh-60px)] w-full flex justify-center items-center ">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 py-4 ">
        {/* LEFT COLUMN: Images */}
        <div className="flex flex-col md:flex-row col-span-2 items-start gap-4">
          {/* Main Image */}
          <div className="w-full md:w-auto flex rounded-md overflow-hidden justify-center">
            <img
              src={selectedProduct.thumbnail}
              alt="Main Product"
              className="object-cover w-60 h-60 md:w-auto md:h-full"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex flex-wrap md:flex-col gap-2 justify-center md:justify-start">
            {selectedProduct.images?.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover w-20 h-20 md:w-16 md:h-16 border border-gray-200"
              />
            ))}

            {/* Show extra block if more than 5 thumbnails */}
            {extraCount > 0 && (
              <div className="relative flex items-center justify-center w-20 h-20 md:w-16 md:h-16 border border-gray-200  bg-opacity-50 text-center text-sm font-medium">
                {extraCount}+ Photos
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Product Details */}
        <div className="flex flex-col justify-start max-w-104 ">
          {/* Product Title & Price */}
          <div className="mb-10">
            <h4 className="text-4xl font-bold">{selectedProduct.title}</h4>
            <p className="text-2xl font-semibold text-green-700">
              ${selectedProduct.price}
            </p>
            <p className="text-lg text-gray-600">MRP incl. of all taxes</p>
          </div>

          {/* Description */}
          <p className="mb-25 text-xl">{selectedProduct.description}.</p>

          {/* Colors */}
          <div className="mt-1 mb-2">
            <p className="font-medium mb-1">Color</p>
            <div className="flex gap-2">
              <div className="bg-white border border-gray-300 w-12 h-12"></div>
              <div className="bg-green-500 w-12 h-12"></div>
              <div className="bg-red-500 w-12 h-12"></div>
              <div className="bg-black w-12 h-12"></div>
            </div>
          </div>
          <div className="mb-4">
            <p className="font-medium mb-1">Size</p>
            <div className="flex gap-2">
              <div className=" border-gray-300 border flex justify-center items-center w-12 h-12">
                XS
              </div>
              <div className=" border-gray-300 border flex justify-center items-center w-12 h-12">
                S
              </div>
              <div className=" border-gray-300 border flex justify-center items-center w-12 h-12">
                M
              </div>
              <div className="border-gray-300 border flex justify-center items-center w-12 h-12">
                L
              </div>
              <div className="border-gray-300 border flex justify-center items-center w-12 h-12">
                XL
              </div>
              <div className="border-gray-300 border flex justify-center items-center w-12 h-12">
                XXL
              </div>
              <div className="border-gray-300 border flex justify-center items-center w-12 h-12">
                XXXL
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <p className="mb-4 text-gray-400">
              FIND YOUR SIZE | MEASUREMENT GUIDE
            </p>
            <button className="bg-gray-300 rounded-md w-full py-2">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductById;
