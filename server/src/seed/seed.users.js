import axios from "axios";
import csv from "csv-parser";
import fs from "fs";

import config from "../config/config.js";
import User from "../models/user.model.js";

export const seedUsers = async () => {
  const users = [];
  fs.createReadStream("./files/Users.csv")
    .pipe(csv())
    .on("data", (row) => users.push(row));

  User.find().then(async (data) => {
    if (data.length === 0)
      users.map(async (user) => {
        await axios.post(`http://localhost:5000/auth/signup`, {
          Id: user.Id,
          name: user.name,
          username: user.username,
          email: user.email,
          password: user.password,
          password2: user.password,
          role: user.role,
        });
      });
  });
};
