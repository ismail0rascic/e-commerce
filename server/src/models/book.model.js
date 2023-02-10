import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  record: {
    type: Number,
  },
  stop: {
    type: String,
  },
  stock: {
    type: Number,
  },
});
export default mongoose.model("Book", BookSchema);
