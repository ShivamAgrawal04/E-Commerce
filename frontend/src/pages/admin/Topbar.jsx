import { FaBell } from "react-icons/fa";
import { useState } from "react";

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="text-lg font-semibold">Hello, Admin 👋</div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDark}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 relative">
          <FaBell />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
