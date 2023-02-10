import _ from "lodash";
import Cart from "../models/cart.model.js";

export const getCart = (req, res) => {
  Cart.find().then((data, err) => {
    res.status(200).json(data);
  });
};

export const deleteCart = (req, res) => {
  const id = req.params.id;
  Cart.findOne({ userId: id }).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    data.remove((err, data) => {
      if (err || !data) {
        return res.status(404).json(err.message);
      }
      res.status(200).json("Item deleted.");
    });
  });
};

export const refreshCart = (user) => {
  Cart.findOne({ userId: user }).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    data.remove((err, data) => {
      const newCart = new Cart({
        userId: user,
      });
      newCart.save();
    });
  });
};

export const createCart = (req, res) => {
  const id = req.params.id;
  Cart.find({ userId: id }).then((data1, err) => {
    if (data1.length > 0) {
      res.json(data1);
    } else {
      Cart.find({ userId: "guest" }).exec((err, data) => {
        if (err || data.length === 0) {
          const newCart = new Cart({
            userId: req.body.id,
          });
          newCart
            .save()
            .then((cart) => {
              res.json(cart);
            })
            .catch((err) => console.log(err));
        } else {
          const cart = _.extend(data[0], { userId: req.body.id });
          cart.save((err, data) => {
            if (err) {
              return res.status(400).json(err.message);
            }
            res.status(200).json(data);
          });
        }
      });
    }
  });
};

export const addToCart = async (req, res) => {
  try {
    const id = req.params.id;
    const main = await Cart.find({ userId: id });
    const itemExists = main[0].items.find(
      (item) => item.toString() === req.body.items._id
    );
    if (itemExists) {
      return res.json({});
    } else {
      main[0].items.push(req.body.items);
      await main[0].save();
      res.json({ message: "Item added successfully!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const id = req.params.id;
    const main = await Cart.find({ userId: id });
    main[0].items.pull(req.body.items);
    await main[0].save();
    res.json({ message: "Item removed successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
