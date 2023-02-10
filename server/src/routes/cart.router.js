import express from "express";
import {
  addToCart,
  createCart,
  deleteCart,
  getCart,
  removeFromCart,
} from "../controller/cart.controller.js";
const router = express.Router();
router.route("/api/cart").get(getCart);
router.route("/api/cart/:id").put(createCart).delete(deleteCart);
router.route("/api/cartAdd/:id").put(addToCart);
router.route("/api/cartRemove/:id").put(removeFromCart);

export default router;
