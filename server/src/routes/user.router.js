import express from "express";
import {
  deleteUser,
  getUsers,
  getUser,
  updateUser,
} from "../controller/user.controller.js";
const router = express.Router();
router.route("/api/users").get(getUsers);
router.route("/api/users/:id").get(getUser).put(updateUser).delete(deleteUser);
export default router;
