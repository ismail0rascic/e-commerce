import express from "express";
import { upload, uploadImage } from "../controller/upload.controller.js";
const router = express.Router();
router.post("/uploadBook", uploadImage, upload);
router.post("/uploadAuthor", uploadImage, upload);

export default router;