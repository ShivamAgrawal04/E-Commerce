import axios from "axios";
import { logoutUser } from "../store/slice/authSlice";
// import store from "../store/Store"; // Import Redux store

const api = axios.create({
  baseURL: "http://localhost:4000/api/v1", // Change this if needed
  withCredentials: true, // Required for HTTP-only cookies
});

// Request Interceptor (Optional if you're using auth headers)

// Response Interceptor
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    // Handle network errors
    if (!err.response) {
      return Promise.reject({
        message: "Network error. Please check your connection.",
      });
    }

    // Handle token refresh
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await api.post("/auth/refresh-token");
        return api(originalRequest);
      } catch (refreshErr) {
        store.dispatch(logoutUser());
        return Promise.reject(refreshErr);
      }
    }

    return Promise.reject(err);
  }
);

export default api;
