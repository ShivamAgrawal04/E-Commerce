import { NavLink } from "react-router-dom";
import { FaBox, FaShoppingCart } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-900 p-6 shadow-lg flex flex-col">
      <h1 className="text-2xl font-bold mb-10">Admin Panel</h1>

      <nav className="flex flex-col gap-4">
        <NavLink
          to="/adminMenu"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded-md ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            }`
          }
        >
          <FaBox />
          Dashboard
        </NavLink>

        <NavLink
          to="products"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded-md ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            }`
          }
        >
          <FaBox />
          Products
        </NavLink>

        <NavLink
          to="orders"
          className={({ isActive }) =>
            `flex items-center gap-3 p-2 rounded-md ${
              isActive
                ? "bg-blue-500 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
            }`
          }
        >
          <FaShoppingCart />
          Orders
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
