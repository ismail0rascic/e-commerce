import bodyParser from "body-parser";
import express from "express";
import passport from "passport";
import cookies from "cookie-parser";

import("./config/passport.js");

import auth from "./routes/auth.router.js";
import book from "./routes/book.router.js";
import promotion from "./routes/promotion.router.js";
import upload from "./routes/upload.router.js";
import user from "./routes/user.router.js";
import cart from "./routes/cart.router.js";
import order from "./routes/order.router.js";

import { seedUsers } from "./seed/seed.users.js";
import { seedBooks } from "./seed/seed.books.js";

import cors from "cors";
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(cookies());

app.use(bodyParser.json());
app.use("/", auth);
app.use("/", promotion);
app.use("/", book);
app.use("/", upload);
app.use("/", user);
app.use("/", cart);
app.use("/", order);

seedUsers();
seedBooks();

export default app;
