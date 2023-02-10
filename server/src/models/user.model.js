import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  address: { type: String },
  state: { type: String },
  city: { type: String },
  zip: { type: String },
  role: { type: String, default: "customer" },
  member: { type: Boolean, default: "false" },
});
export default mongoose.model("User", UserSchema);
