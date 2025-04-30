import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const dummyOrders = [
  {
    id: 1,
    user: "Ankit Sharma",
    product: "Slim Fit Checked Shirt",
    quantity: 2,
    amount: 800,
    status: "Pending",
  },
  {
    id: 2,
    user: "Sanya Mishra",
    product: "Classic Black Pants",
    quantity: 1,
    amount: 100,
    status: "Pending",
  },
  {
    id: 3,
    user: "Rahul Verma",
    product: "Dark Grey Formal Trousers",
    quantity: 1,
    amount: 200,
    status: "Dispatched",
  },
];

const Orders = () => {
  const [orders, setOrders] = useState(dummyOrders);

  const handleStatusChange = (id, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Orders Management</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800">
              <th className="p-2">User</th>
              <th className="p-2">Product</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t dark:border-gray-700">
                <td className="p-2">{order.user}</td>
                <td className="p-2">{order.product}</td>
                <td className="p-2">{order.quantity}</td>
                <td className="p-2">${order.amount}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      order.status === "Dispatched"
                        ? "bg-green-200 text-green-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-2 flex gap-2">
                  {order.status !== "Dispatched" && (
                    <>
                      <button
                        onClick={() =>
                          handleStatusChange(order.id, "Dispatched")
                        }
                        className="text-green-500 hover:text-green-700"
                      >
                        <FaCheck />
                      </button>
                      <button
                        onClick={() =>
                          handleStatusChange(order.id, "Cancelled")
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTimes />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
