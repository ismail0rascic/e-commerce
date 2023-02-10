import mongoose from "mongoose";
import Book from "./book.model.js";

const OrderSchema = new mongoose.Schema({
  user: { type: String },
  date: {
    type: String,
    default:
      new Date().getDate() +
      "." +
      (new Date().getMonth() + 1) * 1 + 
      "." +
      new Date().getFullYear(),
  },
  time: {
    type: String,
    default: new Date().getHours() * 1 + ":" + new Date().getMinutes() * 1,
  },
  items: [String],
});
export default mongoose.model("Order", OrderSchema);
