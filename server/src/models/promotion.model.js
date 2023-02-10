import mongoose from "mongoose";

const PromotionSchema = new mongoose.Schema({
  discount: { type: Number },
  code: { type: String },
  expireAt: { type: Date },
});
export default mongoose.model("Promotion", PromotionSchema);
