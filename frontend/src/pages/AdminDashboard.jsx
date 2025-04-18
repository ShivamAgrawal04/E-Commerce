import React from "react";
import { Plus, List, ShoppingCart } from "lucide-react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import AddItems from "./AddItems";
import ListItems from "./ListItems";
import Orders from "./Orders";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white pr-4 ">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul>
          <NavLink
            to="/adminDashboard/addItems"
            className={({ isActive }) =>
              `mb-2 flex items-center gap-2  hover:bg-gray-200 p-2 rounded ${
                isActive ? "bg-gray-200" : ""
              }`
            }
          >
            <Plus className="w-5 h-5" />
            <div className="w-full text-left">Add Items</div>
          </NavLink>

          <NavLink
            to="/adminDashboard/listItems"
            className={({ isActive }) =>
              `mb-2 flex items-center gap-2  hover:bg-gray-200 p-2 rounded ${
                isActive ? "bg-gray-200" : ""
              }`
            }
          >
            <List className="w-5 h-5" />
            <div className="w-full text-left">List Items</div>
          </NavLink>

          <NavLink
            to="/adminDashboard/orders"
            className={({ isActive }) =>
              `mb-2 flex items-center gap-2  hover:bg-gray-200 p-2 rounded ${
                isActive ? "bg-gray-200" : ""
              }`
            }
          >
            <ShoppingCart className="w-5 h-5" />
            <div className="w-full text-left">Orders</div>
          </NavLink>
        </ul>
      </div>

      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<ListItems />} />
          <Route path="addItems" element={<AddItems />} />
          <Route path="listItems" element={<ListItems />} />
          <Route path="orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
