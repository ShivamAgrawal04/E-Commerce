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
import ProductById from "./pages/products/ProductById";
import CollectionsPage from "./pages/products/CollectionsPage";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
// import { loginUser } from "./store/slice/authSlice";
import ProtectedRoute from "./components/ProtectedRoute";
import CollectionPage from "./pages/collection/CollectionPage";
import ProductById1 from "./pages/products/ProductById1";
// import BurgerQRCode from "./components/QRCodeStyling";
// import BurgerDotsQRCode from "./components/QRCodeStyling";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await api.get("/auth/me");
        dispatch(loginUser(res.data));
        console.log("User authenticated:", res.data);
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };
  }, [dispatch]);

  return (
    <div data-theme="light" className="bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl">
        <NavbarTailwind>
          <Routes>
            <Route path="/adminDashboard" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="addProduct" element={<AddItems />} />

              <Route path="orders" element={<Orders />} />
            </Route>

            {/* <Route
              path="/fancy"
              element={
                <BurgerDotsQRCode
                  value="https://example.com"
                  imageUrl={
                    "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
                  }
                />
              }
            /> */}
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
