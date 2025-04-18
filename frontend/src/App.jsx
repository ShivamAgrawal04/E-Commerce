import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductById from "./components/ProductById";
import Signup from "./pages/Signup";
import PageNotFound from "./components/PageNotFound";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import CollectionsPage from "./pages/CollectionsPage";
import NavbarTailwind from "./pages/NavbarTailwind";
import ProductsTailwind from "./pages/ProductsTailwind";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";
import { loginUser } from "./store/slice/authSlice";

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
    <div data-theme="light">
      <div className="mx-auto max-w-7xl">
        <NavbarTailwind>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<ProductsTailwind />} />
            <Route path="/cart" element={<Cart />} />

            {/* Protected Profile Route */}
            <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
              <Route path="/profile" element={<Profile />} />
            </Route>

            <Route path="/collection" element={<CollectionsPage />}></Route>

            {/* Other Routes */}
            <Route path="/ProductById/:id" element={<ProductById />} />
            <Route path="/adminDashboard/*" element={<AdminDashboard />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </NavbarTailwind>
      </div>

      <Footer />
    </div>
  );
};

export default App;
