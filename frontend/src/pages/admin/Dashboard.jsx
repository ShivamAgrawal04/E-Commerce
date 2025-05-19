import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TrendingUp,
  ShoppingBag,
  Users,
  DollarSign,
  Package,
  AlertCircle,
} from "lucide-react";
import api from "../../api/axiosInstance";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalOrders: 0,
    totalProducts: 0,
    lowStock: 0,
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [ordersRes, productsRes] = await Promise.all([
          api.get("/orders"),
          api.get("/products"),
        ]);

        // Calculate stats
        const totalSales = ordersRes.data.reduce(
          (sum, order) => sum + order.totalAmount,
          0
        );
        const lowStock = productsRes.data.filter(
          (product) => product.countInStock < 5
        ).length;

        setStats({
          totalSales,
          totalOrders: ordersRes.data.length,
          totalProducts: productsRes.data.length,
          lowStock,
        });

        // Get recent orders
        setRecentOrders(ordersRes.data.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const dashboardStats = [
    {
      title: "Total Sales",
      value: `$${stats.totalSales.toFixed(2)}`,
      icon: <DollarSign className="h-6 w-6" />,
      color: "bg-green-500",
      change: "+12%",
    },
    {
      title: "Total Orders",
      value: stats.totalOrders,
      icon: <ShoppingBag className="h-6 w-6" />,
      color: "bg-blue-500",
      change: "+8%",
    },
    {
      title: "Total Products",
      value: stats.totalProducts,
      icon: <Package className="h-6 w-6" />,
      color: "bg-purple-500",
      change: "+5%",
    },
    {
      title: "Low Stock Items",
      value: stats.lowStock,
      icon: <AlertCircle className="h-6 w-6" />,
      color: "bg-red-500",
      change: "Needs attention",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pr-3">
      <div className="text-sm text-gray-500 text-right pt-2">
        Last updated: {new Date().toLocaleDateString()}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
                {stat.icon}
              </div>
            </div>
            <div className="mt-4">
              <span
                className={`text-sm font-medium ${
                  stat.title === "Low Stock Items"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {stat.change}
              </span>
              {stat.title !== "Low Stock Items" && (
                <span className="text-sm text-gray-600"> from last month</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View All Orders
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      #{order._id.slice(-6)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.user?.name || "Guest"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      ${order.totalAmount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
