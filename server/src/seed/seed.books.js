import csv from "csv-parser";
import fs from "fs";

import Book from "../models/book.model.js";

export const seedBooks = () => {
  const books = [];
  fs.createReadStream("./files/Books.csv")
    .pipe(csv())
    .on("data", (row) => books.push({ ...row, image: row.image + ".jpg" }));

  Book.find().then(async (data) => {
    if (data.length === 0) {
      Book.insertMany(books);
    }
  });
};
