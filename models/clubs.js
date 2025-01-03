const mongoose = require("mongoose");

const ClubSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
});

module.exports = mongoose.model("Club", ClubSchema);
