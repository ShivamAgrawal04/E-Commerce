import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount, removeFromCart } from "../../store/slice/cartSlice";
import axios from "axios";

const Cart = () => {
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 1) {
      const updatedItems = [...cartItems];
      updatedItems[index] = { ...updatedItems[index], quantity: newQuantity };

      // Update localStorage
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));

      // Update Redux state
      dispatch({ type: "cart/updateItems", payload: updatedItems });
    }
  };

  const handleRemoveItem = (index) => {
    // Dispatch the removeFromCart action to update Redux state
    dispatch(removeFromCart(index));
  };

  const calculateTotal = (item) => {
    return item.price * (item.quantity || 1);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + calculateTotal(item), 0);
  };

  return (
    <section className="bg-white antialiased">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
          Your Product
        </h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            {/* Product Headers */}
            <div className="grid grid-cols-12 text-sm text-gray-500 mb-2 px-4">
              <div className="col-span-6 md:col-span-7">PRODUCT</div>
              <div className="col-span-3 md:col-span-3 text-center">
                QUANTITY
              </div>
              <div className="col-span-3 md:col-span-2 text-right">TOTAL</div>
            </div>

            {/* Product Items */}
            <div className="space-y-6">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-t border-gray-200 py-4 px-4"
                  >
                    <div className="grid grid-cols-12 items-center">
                      <div className="col-span-6 md:col-span-7 flex items-center gap-3">
                        <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-gray-500">
                            Color: {item.color || "Default"} • Size:{" "}
                            {item.size || "M"}
                          </p>
                          <button
                            onClick={() => handleRemoveItem(index)}
                            className="text-gray-500 hover:text-red-500 text-sm mt-1 flex items-center gap-1"
                          >
                            <FaTrash size={12} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>

                      <div className="col-span-3 md:col-span-3">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                index,
                                (item.quantity || 1) - 1
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                          >
                            −
                          </button>
                          <span className="w-8 text-center">
                            {item.quantity || 1}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange(
                                index,
                                (item.quantity || 1) + 1
                              )
                            }
                            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="col-span-3 md:col-span-2 text-right font-medium">
                        ${calculateTotal(item).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 border-t border-gray-200">
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              )}
            </div>

            <Link
              to="/products"
              className="text-blue-600 hover:underline inline-block mt-6"
            >
              Continue Shopping
            </Link>

            {/* Keep the "People also bought" section unchanged */}
            <div className="hidden xl:mt-8 xl:block">
              <h3 className="text-2xl font-semibold text-gray-900">
                People also bought
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4 sm:mt-8">
                {/* Existing "People also bought" content remains unchanged */}
              </div>
            </div>
          </div>

          {/* Order summary section with dynamic calculations */}
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <p className="text-xl font-semibold text-gray-900">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${calculateSubtotal().toFixed(2)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -$0.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      $0.00
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500">Tax</dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${(calculateSubtotal() * 0.1).toFixed(2)}
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                  <dt className="text-base font-bold text-gray-900">Total</dt>
                  <dd className="text-base font-bold text-gray-900">
                    $
                    {(calculateSubtotal() + calculateSubtotal() * 0.1).toFixed(
                      2
                    )}
                  </dd>
                </dl>
              </div>

              <Link
                to="/checkout"
                className="flex w-full items-center justify-center rounded-lg bg-primary-700 bg-[#1D4ED8] px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300"
              >
                Proceed to Checkout
              </Link>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500"> or </span>
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline"
                >
                  Continue Shopping
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <htmlForm className="space-y-4">
                <div>
                  <label
                    htmlFor="voucher"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    {" "}
                    Do you have a voucher or gift card?{" "}
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
                    placeholder=""
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm hover:bg-[#9795ed] text-white font-medium bg-[#1D4ED8] hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Apply Code
                </button>
              </htmlForm>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
