import React, { useState } from "react";

const CheckoutPage = () => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Submit form data to the server or payment gateway
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Payment Successful");
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>

      <div className="lg:flex lg:space-x-8">
        {/* Shipping Address Section */}
        <div className="lg:w-2/3 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Shipping Address</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="text-lg font-medium">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your shipping address"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Payment Method Section */}
                <div>
                  <label className="text-lg font-medium">Payment Method</label>
                  <div className="mt-2 space-x-4">
                    <label className="inline-flex items-center space-x-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="creditCard"
                        checked={paymentMethod === "creditCard"}
                        onChange={() => setPaymentMethod("creditCard")}
                        className="form-radio"
                      />
                      <span>Credit Card</span>
                    </label>
                    <label className="inline-flex items-center space-x-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={() => setPaymentMethod("paypal")}
                        className="form-radio"
                      />
                      <span>PayPal</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="mt-8 space-y-4">
                <h4 className="text-2xl font-semibold">Order Summary</h4>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-lg font-medium">Total: $150.00</p>
                  <p className="text-sm text-gray-500">Shipping: $10.00</p>
                  <p className="text-lg font-semibold text-gray-900">
                    Grand Total: $160.00
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Complete Purchase"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Order Details Section (Optional for additional info) */}
        <div className="lg:w-1/3 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Order Details</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Item 1</span>
                <span className="font-medium">$50.00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Item 2</span>
                <span className="font-medium">$100.00</span>
              </div>
              <div className="flex justify-between mt-4">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$150.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
