const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
  country: String,
  city: String,
  locality: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const ProfileSchema = mongoose.Schema({
  bio: String,
  contact: String,
  address: AddressSchema,
});

module.exports = mongoose.model("Profile", ProfileSchema);
