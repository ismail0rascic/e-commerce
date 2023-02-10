import express from "express";
import {
  getPromotion,
  addPromotion,
  deletePromotion,
} from "../controller/promotion.controller.js";
const router = express.Router();
router.route("/api/promotion").get(getPromotion).post(addPromotion);
router.route("/api/promotion/:id").delete(deletePromotion);
export default router;
