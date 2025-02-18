import { FaShoppingCart, FaUser, FaBars, FaSync } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100">
      {/* Left: Menu & Breadcrumb */}
      <div className="flex items-center space-x-4">
        <FaBars className="text-gray-700 text-lg cursor-pointer" />
        <span className="text-gray-500">Home</span>
        <span className="text-gray-500 cursor-pointer">Collections</span>
        <span className="text-gray-500">New</span>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4">
        <FaSync className="text-gray-700 text-lg cursor-pointer" />
        <div className="relative">
          <FaShoppingCart className="text-gray-700 text-lg cursor-pointer" />
          <span className="absolute -top-3 -right-3 bg-black text-white text-xs px-1.5 py-0.5 rounded-full">
            2
          </span>
        </div>
        <FaUser className="text-gray-700 text-lg cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
