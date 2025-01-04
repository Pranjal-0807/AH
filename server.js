const dotenv = require("dotenv");
dotenv.config();
const express = require("express");

const students = require("./routes/students");
const clubs = require("./routes/clubs");
const PORT = process.env.PORT || 3000;
require("./db/mongoose");

const app = express();

app.use(express.json());

app.use("/students", students);

app.use("/clubs", clubs);

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
