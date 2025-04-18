import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  profileUser,
  refreshAccessToken,
  updateProfile,
  updatePassword,
  checkAuthStatus,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyToken, logoutUser);
router.get("/profile", verifyToken, profileUser); // protected route
router.post("/updateProfile", verifyToken, updateProfile);
router.post("/updatePassword", verifyToken, updatePassword);
router.post("/refresh-token", refreshAccessToken);
router.get("/me", checkAuthStatus);

export default router;
