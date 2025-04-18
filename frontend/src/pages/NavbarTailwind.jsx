import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { FaShoppingCart, FaUser, FaBars, FaSync } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Products", href: "#", current: false },
  { name: "Collection", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarTailwind({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-open:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-open:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center gap-5 justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  alt="Your Company"
                  src="company_logo.png"
                  className=" w-10 scale-150 h-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                {user?.role === "admin" ? (
                  <div className="flex space-x-4">
                    <NavLink
                      to="/"
                      className="relative group text-gray-500 cursor-pointer text-lg font-semibold"
                    >
                      {({ isActive }) => (
                        <>
                          Home
                          <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 transition-transform duration-300 ease-in-out transform ${
                              isActive
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          ></span>
                        </>
                      )}
                    </NavLink>
                    <NavLink
                      to="/adminDashboard"
                      className="relative group text-gray-500 cursor-pointer text-lg font-semibold"
                    >
                      {({ isActive }) => (
                        <>
                          Dashboard
                          <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 transition-transform duration-300 ease-in-out transform ${
                              isActive
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          ></span>
                        </>
                      )}
                    </NavLink>
                    {/* <NavLink to="/add">AddItems</NavLink> */}
                  </div>
                ) : (
                  <div className="flex space-x-4">
                    <NavLink
                      to="/"
                      className="relative group text-gray-500 cursor-pointer text-lg font-semibold"
                    >
                      {({ isActive }) => (
                        <>
                          Home
                          <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 transition-transform duration-300 ease-in-out transform ${
                              isActive
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          ></span>
                        </>
                      )}
                    </NavLink>
                    <NavLink
                      to="/collection"
                      className="relative group text-gray-500 cursor-pointer text-lg font-semibold"
                    >
                      {({ isActive }) => (
                        <>
                          Collections
                          <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 transition-transform duration-300 ease-in-out transform ${
                              isActive
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          ></span>
                        </>
                      )}
                    </NavLink>

                    <NavLink
                      to="/products"
                      className="relative group text-gray-500 cursor-pointer text-lg font-semibold"
                    >
                      {({ isActive }) => (
                        <>
                          Products
                          <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-blue-500 transition-transform duration-300 ease-in-out transform ${
                              isActive
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }`}
                          ></span>
                        </>
                      )}
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {user?.role === "admin" ? (
                ""
              ) : (
                <Link
                  to="/cart"
                  className="relative rounded-full m-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                >
                  <FaShoppingCart className=" text-gray-700 text-lg cursor-pointer hover:text-gray-900 size-6" />
                  <span className="absolute -top-4 -right-4 bg-black text-white text-sm w-6 h-6 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                </Link>
              )}

              {/* Profile dropdown */}
              {isAuthenticated ? (
                <div className="dropdown dropdown-end relative ml-3">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <Link to="/profile" className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link>Settings</Link>
                    </li>
                    <li>
                      <Link onClick={handleLogout}>Logout</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/login" className="relative ml-3">
                  <FaUser className="text-gray-700 text-lg cursor-pointer hover:text-gray-900 size-6" />
                </Link>
              )}
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      {/* <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header> */}
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          {children}
        </div>
      </main>
    </div>
  );
}
