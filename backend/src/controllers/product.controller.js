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
    const { 
      sort = '', 
      category = '', 
      color = '', 
      size = '',
      minPrice = 0,
      maxPrice = Number.MAX_SAFE_INTEGER,
      search = ''
    } = req.query;

    // Build filter object
    const filter = {};
    
    if (category) filter.category = category;
    if (color) filter.color = color;
    if (size) filter.availableSizes = { $elemMatch: { size: size } };
    
    filter.price = {
      $gte: Number(minPrice),
      $lte: Number(maxPrice)
    };

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Build sort object
    let sortObj = {};
    if (sort === 'price_asc') sortObj.price = 1;
    if (sort === 'price_desc') sortObj.price = -1;
    if (sort === 'newest') sortObj.createdAt = -1;

    const products = await Product.find(filter).sort(sortObj).lean();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      category,
      images,
      thumbnail,
      stockQuantity,
      availableSizes,
      color,
      material,
      brand,
      discountPercentage
    } = req.body;

    if (!title || !description || !price || !category || !thumbnail || !stockQuantity) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const product = await Product.create({
      title,
      description,
      price,
      category,
      images: images || [],
      thumbnail,
      stockQuantity,
      availableSizes: availableSizes || [],
      color,
      material,
      brand,
      discountPercentage
    });

    res.status(201).json({ 
      message: "Product added successfully",
      product 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body },
      { new: true, runValidators: true }
    );
    
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};