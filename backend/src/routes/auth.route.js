import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  profileUser,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyToken, logoutUser);
router.post("/profile", verifyToken, profileUser); // protected route

export default router;
