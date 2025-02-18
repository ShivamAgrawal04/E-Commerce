import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, enum: ["T-shirt", "Pants", "Accessories"] },
  images: [{ type: String }], // Array of image URLs
  stock: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
