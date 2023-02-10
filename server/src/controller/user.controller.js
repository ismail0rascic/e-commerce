import _ from "lodash";

import User from "../models/user.model.js";
import validateUserUpdate from "../validation/UserUpdate.validation.js";

export const getUsers = (req, res) => {
  User.find().then((data, err) => {
    res.status(200).json(data);
  });
};
export const getUser = (req, res) => {
  const id = req.params.id;
  User.find(id).then((data, err) => {
    res.status(200).json(data);
  });
};

export const updateUser = (req, res) => {
  const { errors, isValid } = validateUserUpdate(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.body.id;
  User.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Item not found");
    }
    const user = _.extend(data, req.body);
    user.save((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      res.status(200).json(data);
    });
  });
};
export const deleteUser = (req, res) => {
  const id = req.params.id;
  User.findById(id).exec((err, data) => {
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
