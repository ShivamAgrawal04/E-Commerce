import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/slice/authSlice";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic validation
    if (
      !formData.name ||
      !formData.lastName ||
      !formData.email ||
      !formData.password
    ) {
      setError("All fields are required");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setIsLoading(false);
      return;
    }

    try {
      const result = await dispatch(registerUser(formData));
      if (result.meta.requestStatus === "fulfilled") {
        navigate("/login");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] max-w-7xl mx-auto grid justify-center items-center lg:grid-cols-2 bg-gradient-to-br from-base-100 to-base-200">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-8">
        <div className="w-full max-w-xl space-y-6 bg-transparent p-6">
          {/* Logo */}
          <div className="text-center mb-6">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                <img
                  src="/logo.png"
                  alt="SharpFit Logo"
                  className="w-12 h-12"
                />
              </div>
              <h1 className="text-3xl font-bold mt-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Join SharpFit
              </h1>
              <p className="text-base-content/70 text-base mt-1">
                Create your account and start shopping
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="alert alert-error rounded-xl">
                <span>{error}</span>
              </div>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base text-base-content/80">
                  Full Name
                </span>
              </label>

              <div className="flex gap-4">
                <div className="relative w-1/2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <User className="size-5 text-primary/70" />
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full pl-10 h-12 rounded-xl bg-base-100/50 border-base-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="First Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="relative w-1/2">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <User className="size-5 text-primary/70" />
                  </div>
                  <input
                    type="text"
                    className="input input-bordered w-full pl-10 h-12 rounded-xl bg-base-100/50 border-base-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base text-base-content/80">
                  Email
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-primary/70 z-10" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-10 h-12 rounded-xl bg-base-100/50 border-base-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-base text-base-content/80">
                  Password
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-primary/70 z-10" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-10 h-12 rounded-xl bg-base-100/50 border-base-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="••••••••"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:text-primary transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full h-12 text-base font-semibold rounded-xl hover:scale-[1.02] transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-base-content/70 text-base">
              Already have an account?{" "}
              <Link
                to="/login"
                className="link link-primary font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Fashion Image */}
      <div className="hidden lg:flex bg-[#FAFAFA] h-[calc(100vh-140px)] pt-0 relative overflow-hidden">
        <div className="relative w-full">
          <img
            src="singup_img.png"
            alt="Fashion Collection"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-12 text-left">
            <h2 className="text-4xl font-bold text-white mb-4 leading-snug">
              Start Your Style Journey
            </h2>
            <p className="text-white/90 text-lg max-w-lg">
              Join SharpFit to discover the latest trends in men's fashion, get
              exclusive offers, and enjoy a personalized shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
