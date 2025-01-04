const mongoose = require("mongoose");

const ClubSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  students: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Student",
  },
});

module.exports = mongoose.model("Club", ClubSchema);
