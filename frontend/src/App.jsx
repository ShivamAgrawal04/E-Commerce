import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./pages/admin/MainLayout";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import AddItems from "./pages/admin/AddItems";
import Orders from "./pages/admin/Orders";
import NavbarTailwind from "./components/NavbarTailwind";
import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProductsTailwind from "./pages/products/ProductsTailwind";
import Cart from "./pages/products/Cart";
import WishlistPage from "./pages/products/WishlistPage";
import CheckoutPage from "./pages/products/CheckoutPage";
import OrderHistoryPage from "./pages/admin/OrderHistoryPage";
import Profile from "./pages/auth/Profile";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import CollectionPage from "./pages/collection/CollectionPage";
import ProductById1 from "./pages/products/ProductById1";
import { checkAuth } from "./store/slice/authSlice";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, [dispatch]);

  return (
    <div data-theme="light" className="bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl">
        <NavbarTailwind>
          <Routes>
            <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
              <Route path="/adminMenu" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="addProduct" element={<AddItems />} />
                <Route path="orders" element={<Orders />} />
              </Route>
            </Route>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ProductsTailwind />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orderhistory" element={<OrderHistoryPage />} />

            {/* Protected Profile Route */}
            <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="/collection" element={<CollectionPage />}></Route>

            {/* Other Routes */}
            <Route path="/ProductById/:id" element={<ProductById1 />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </NavbarTailwind>
      </div>

      <Footer />
    </div>
  );
};

export default App;
