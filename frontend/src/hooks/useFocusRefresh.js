// src/hooks/useFocusRefresh.ts
import { useEffect } from "react";
import axios from "@/utils/axios";

const useFocusRefresh = () => {
  useEffect(() => {
    const handleFocus = async () => {
      try {
        await axios.get("/auth/refresh");
      } catch {}
    };

    window.addEventListener("focus", handleFocus);
    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);
};

export default useFocusRefresh;
