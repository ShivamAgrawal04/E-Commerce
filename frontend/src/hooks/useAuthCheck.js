// src/hooks/useAuthCheck.ts
import { useEffect } from "react";
import axios from "@/utils/axios";
import { useDispatch } from "react-redux";
import { setUser, logoutUser } from "@/features/auth/authSlice";

const useAuthCheck = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/auth/me");
        dispatch(setUser(res.data.user));
      } catch {
        dispatch(logoutUser());
      }
    };
    checkAuth();
  }, []);
};

export default useAuthCheck;
