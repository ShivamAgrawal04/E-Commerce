import { client, isRedisConnected } from "../config/Redis.js";
import Product from "../models/product.model.js";

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    if (isRedisConnected) {
      const cachedProducts = await client.get("allProducts");
      if (cachedProducts) {
        const products = JSON.parse(cachedProducts);
        return res.json(products);
      }
    }
    const products = await Product.find({}).lean();
    if (isRedisConnected) {
      await client.set("allProducts", JSON.stringify(products), {
        EX: 300, // auto expire after 5 minutes
      });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const { name, description, price, category, images, stock } = req.body;

  if (!name || !description || !price || !category || !images || !stock) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const product = await Product.create({
      name,
      description,
      price,
      category,
      images,
      stock,
    });
    res.status(201).json({ product });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const product = await Product.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByName = async (req, res) => {
  try {
    const products = await Product.find({
      name: new RegExp(req.params.name, "i"),
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({
      category: req.params.category,
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByPriceRange = async (req, res) => {
  try {
    const { min, max } = req.params;
    const products = await Product.find({
      price: { $gte: min, $lte: max },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByQuantityRange = async (req, res) => {
  try {
    const { min, max } = req.params;
    const products = await Product.find({
      quantity: { $gte: min, $lte: max },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByRatingRange = async (req, res) => {
  try {
    const { min, max } = req.params;
    const products = await Product.find({
      rating: { $gte: min, $lte: max },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.params;
    const products = await Product.find({
      createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByPopularity = async (req, res) => {
  try {
    const products = await Product.find().sort({ quantity: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByAverageRating = async (req, res) => {
  try {
    const products = await Product.find().sort({ rating: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByAveragePrice = async (req, res) => {
  try {
    const products = await Product.find().sort({ price: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByTotalSales = async (req, res) => {
  try {
    const products = await Product.find().sort({ sales: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByTopSellers = async (req, res) => {
  try {
    const products = await Product.find().sort({ sales: -1 }).limit(10);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByBestSellers = async (req, res) => {
  try {
    const products = await Product.find().sort({ sales: -1 }).limit(10);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByLowStock = async (req, res) => {
  try {
    const products = await Product.find({ quantity: { $lt: 10 } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByHighStock = async (req, res) => {
  try {
    const products = await Product.find({ quantity: { $gte: 100 } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByLowRating = async (req, res) => {
  try {
    const products = await Product.find({ rating: { $lt: 3 } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByHighRating = async (req, res) => {
  try {
    const products = await Product.find({ rating: { $gte: 4 } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByLowPrice = async (req, res) => {
  try {
    const products = await Product.find().sort({ price: 1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByHighPrice = async (req, res) => {
  try {
    const products = await Product.find().sort({ price: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByLowSales = async (req, res) => {
  try {
    const products = await Product.find().sort({ sales: 1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProductsByHighSales = async (req, res) => {
  try {
    const products = await Product.find().sort({ sales: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
