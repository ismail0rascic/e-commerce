import _ from "lodash";
import Promotion from "../models/promotion.model.js";
import User from "../models/user.model.js";

import validatePromotion from "../validation/promotion.validation.js";
import { sendMail } from "./mail.conroller.js";

export const getAllPromotions = (req, res) => {
  Promotion.find().then((data, err) => {
    res.status(200).json(data);
  });
};

export const getPromotion = (req, res) => {
  const id = req.params.id;
  Promotion.find({ lineId: id }).then((data, err) => {
    res.status(200).json(data);
  });
};
export const addPromotion = (req, res) => {
  const { errors, isValid } = validatePromotion(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPromotion = new Promotion({
    discount: req.body.discount,
    expireAt: new Date(Date.now() + req.body.expiration * 60 * 60 * 1000),
    code: req.body.code,
  });

  newPromotion
    .save()
    .then(async (promotion) => {
      await User.find().then((data, err) => {
        data.map(
          async (user) =>
            (await user.member) &&
            sendMail(
              user.email,
              `Dear Member use this code for additional sale code :${promotion.code}`
            )
        );
      });
      res.json(promotion);
    })
    .catch((err) => console.log(err));
};

export const deletePromotion = (req, res) => {
  const id = req.params.id;
  Promotion.findById(id).exec((err, data) => {
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
