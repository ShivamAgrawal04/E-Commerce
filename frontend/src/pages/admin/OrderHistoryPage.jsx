import React from "react";

// Sample order data
const orders = [
  {
    id: 1,
    date: "2025-04-20",
    status: "Delivered",
    items: [
      { name: "T-Shirt", quantity: 2, price: 25 },
      { name: "Jeans", quantity: 1, price: 45 },
    ],
    total: 95,
  },
  {
    id: 2,
    date: "2025-04-18",
    status: "Shipped",
    items: [
      { name: "Shirt", quantity: 1, price: 40 },
      { name: "Shoes", quantity: 1, price: 60 },
    ],
    total: 100,
  },
  {
    id: 3,
    date: "2025-04-15",
    status: "Delivered",
    items: [{ name: "Jacket", quantity: 1, price: 80 }],
    total: 80,
  },
];

const OrderHistoryPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Order History</h2>

      <div className="space-y-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900">
                Order #{order.id}
              </span>
              <span
                className={`${
                  order.status === "Delivered"
                    ? "bg-green-200 text-green-800"
                    : order.status === "Shipped"
                    ? "bg-blue-200 text-blue-800"
                    : "bg-yellow-200 text-yellow-800"
                } px-4 py-1 rounded-full text-sm font-medium`}
              >
                {order.status}
              </span>
            </div>

            <div className="space-y-4">
              {/* Order Items */}
              <div>
                <h4 className="text-lg font-semibold">Items</h4>
                <ul className="space-y-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>
                        {item.quantity} x ${item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Total */}
              <div className="flex justify-between items-center mt-4 font-semibold text-lg">
                <span>Total</span>
                <span className="text-green-600">${order.total}</span>
              </div>

              {/* Order Date */}
              <div className="mt-2 text-gray-500">
                <span>Ordered on: {order.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistoryPage;
