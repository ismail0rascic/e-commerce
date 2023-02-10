import express from "express";
import { addOrder, getOrder } from "../controller/order.controller.js";
const router = express.Router();
router.route("/api/order").get(getOrder).post(addOrder);

export default router;
