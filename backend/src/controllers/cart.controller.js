import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js"; // Assuming you have a Product model

// Add product to the cart
export const addToCart = async (req, res) => {
  try {
    const { userId } = req.params;

    const { productId } = req.body;

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Find the user's cart
    let cart = await Cart.findOne({ userId });

    // If the cart doesn't exist, create a new one
    if (!cart) {
      cart = new Cart({
        userId,
        products: [{ productId, quantity }],
      });
      await cart.save();
      return res.status(201).json(cart);
    }

    // If the cart exists, check if the product is already in the cart
    const productIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId.toString()
    );

    if (productIndex > -1) {
      // Update the quantity if the product is already in the cart
      cart.products[productIndex].quantity += quantity;
    } else {
      // Add new product to the cart
      cart.products.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart", error });
  }
};

// Get the cart for a user
export const getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the user's cart
    const cart = await Cart.findOne({ userId }).populate("products.productId");
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving cart", error });
  }
};

// Update quantity of a product in the cart
export const updateCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    // Find the user's cart
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the product in the cart
    const productIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId.toString()
    );

    if (productIndex > -1) {
      // Update the quantity
      cart.products[productIndex].quantity = quantity;
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error updating cart", error });
  }
};

// Remove a product from the cart
export const removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;

    // Find the user's cart
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Remove the product from the cart
    cart.products = cart.products.filter(
      (item) => item.productId.toString() !== productId.toString()
    );

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error removing product from cart", error });
  }
};
