import mongoose from "mongoose";

const addressSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, lowercase: true },
    phoneNumber: { type: String, required: true },
    street: { type: String, required: true, lowercase: true },
    city: { type: String, required: true, lowercase: true },
    state: { type: String, required: true, lowercase: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true, lowercase: true },
    type: {
      type: String,
      enum: ["billing", "shipping"],
      required: true,
      lowercase: true,
    },
    default: { type: Boolean, default: false }, // Mark one address as the default address
    landmark: { type: String },
    instructions: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", userSchema);

export default Address;
