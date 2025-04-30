import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    discountPercentage: { type: Number },
    discountPrice: { type: Number },
    stockQuantity: { type: Number, required: true },
    category: { type: String, required: true, lowercase: true },
    images: { type: [String] }, // Array of image URLs
    thumbnail: { type: String, required: true },
    availableSizes: [
      {
        size: { type: String, enum: ["S", "M", "L", "XL", "XXL"] },
        quantity: { type: Number, default: 0 },
      },
    ],
    color: { type: String, lowercase: true },
    material: { type: String, lowercase: true },
    brand: { type: String, lowercase: true },

    rating: {
      type: Number,
      default: 0,
      min: 1,
      max: 5,
    },
    // reviews: [
    //   {
    //     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    //     comment: String,
    //     rating: Number,
    //   },
    // ],
  },
  { timestamps: true }
);

// this is used to modify the _id to id in the form of json only not on the database
const virtaual = productSchema.virtual("id");
virtaual.get(function () {
  return this._id;
});

productSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (ret) {
    delete ret._id;
    delete ret.__v;
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
