import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  price: { type: Number, required: true },
  description: { type: String },
  countInStock: { type: Number, default: 0 },
  category: { type: String },
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
