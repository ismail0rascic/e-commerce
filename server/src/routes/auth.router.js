import express from "express";
import {
  signIn,
  signOut,
  signUp,
  authorization,
} from "../controller/auth.controller.js";
const router = express.Router();
router.route("/auth/signup").post(signUp);
router.route("/auth/refresh").get(authorization);
router.route("/auth/signin").post(signIn);
router.route("/auth/signout").post(signOut);
export default router;
