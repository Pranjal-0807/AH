const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
