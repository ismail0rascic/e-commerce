import mongoose from "mongoose";
import Book from "./book.model.js";

const CartSchema = new mongoose.Schema({
  userId: { type: String },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],

});
export default mongoose.model("Cart", CartSchema);
