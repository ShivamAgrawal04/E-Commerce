import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from "../controllers/product.controller.js";
import { checkRole, verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/add", verifyToken, checkRole(["admin"]), addProduct); // Add a new product
router.get("/:id", getProductById); // Get product details
router.get("/", getAllProducts); // Get all products
router.put("/:id", verifyToken, checkRole(["admin"]), updateProduct); // Update a product
router.delete("/:id", verifyToken, checkRole(["admin"]), deleteProduct); // Delete a product

export default router;
