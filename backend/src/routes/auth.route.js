import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  profileUser,
  refreshAccessToken,
  updateProfile,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyToken, logoutUser);
router.post("/profile", verifyToken, profileUser); // protected route
router.post("/updateProfile", verifyToken, updateProfile);
router.post("/refresh-token", refreshAccessToken);

export default router;
