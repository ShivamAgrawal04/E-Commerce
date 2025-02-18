// Product Routes (/api/products)
// GET / – Fetch all products
// GET /:id – Fetch product by ID
// POST / – Add a product (Admin only)
// PUT /:id – Update product details (Admin only)
// DELETE /:id – Remove a product (Admin only)

import { Router } from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/product.controller.js";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
// router.post("/", addProduct); //admin
// router.put("/:id", updateProduct); //admin
// router.delete("/:id", deleteProduct); //admin

export default router;
