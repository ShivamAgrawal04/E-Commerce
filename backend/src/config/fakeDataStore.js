import connectDB from "./db.js";
import mongoose from "mongoose";
import fs from "fs";
import Product from "../models/product.model.js";

const data = async () => {
  await connectDB();

  const rawData = fs.readFileSync("products.json");
  const jsonData = JSON.parse(rawData);

  Product.insertMany(jsonData.products)
    .then((res) => {
      console.log(res);
      console.log("dataimported");
      mongoose.disconnect();
    })
    .catch((err) => {
      console.log(err);
      mongoose.disconnect();
    });
};

data();
