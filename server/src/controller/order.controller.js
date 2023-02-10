import _ from "lodash";
import Order from "../models/order.model.js";
import Book from "../models/book.model.js";
import User from "../models/user.model.js";

import { sendMail } from "./mail.conroller.js";
import { refreshCart } from "./cart.controller.js";
import config from "../config/config.js";

export const getOrder = (req, res) => {
  Order.find().then((data, err) => {
    res.status(200).json(data);
  });
};

export const addOrder = (req, res) => {
  const newOrder = new Order({
    user: req.body.user,
    items: req.body.items,
  });

  newOrder
    .save()
    .then(async (order) => {
      await order.items.map(async (item) => {
        await Book.findById(item).then(async (data) => {
          if (data.stock - 1 === data.record) {
            const Book = _.extend(data, { stock: data.stock - 1, stop: "on" });
            await Book.save();
            await sendMail(config.MANAGER_EMAIL, `${data.title} Book need to be reloaded!`);

            await User.findById(order.user).then((user) => {
              sendMail(user.email, "Your order is successful");
            });
          } else {
            const Book = _.extend(data, { stock: data.stock - 1 });
            await Book.save();
            await User.findById(order.user).then((user) => {
              sendMail(user.email, "Your order is successful");
            });
          }
        });
      });
      await refreshCart(order.user);
      res.json(order);
    })
    .catch((err) => console.log(err));
};
