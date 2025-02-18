// Cart Routes (/api/cart)
// GET / – Get user cart
// POST /add – Add item to cart
// DELETE /remove/:productId – Remove item from cart

import { Router } from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateCart,
} from "../controllers/cart.controller.js";

const router = Router();

router.get("/:userId", getCart);
router.put("/update", updateCart);
router.post("/add", addToCart);
router.delete("/remove", removeFromCart);

export default router;
