import express from "express";
import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
  filterBooks,
} from "../controller/book.controller.js";
const router = express.Router();
router.route("/api/books").get(getBooks).post(addBook);
router.route("/api/books/:id").put(updateBook).delete(deleteBook);
router.route("/api/books/:filter").get(filterBooks);

export default router;
