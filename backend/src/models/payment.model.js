import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  paymentMethod: { type: String, enum: ["Razorpay", "Stripe", "PayPal"] },
  transactionId: { type: String },
  amount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Success", "Failed", "Pending"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", PaymentSchema);

export default Payment;
