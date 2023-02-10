import mongoose from "mongoose";

import config from "./config/config.js";
import app from "./App.js";

mongoose
  .connect(config.MONGO, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.listen(config.PORT, () =>
  console.log(`Server up and running on port ${config.PORT} !`)
);
