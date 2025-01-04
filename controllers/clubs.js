const Club = require("../models/clubs");
const Student = require("../models/students");

exports.getAllClubs = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.status(201).json(clubs);
  } catch (err) {
    res.status(500).json({ message: "Unable to open file on server" });
  }
};

exports.getClubById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    res.json(club);
  } catch (err) {
    res.status(500).json({ message: "Unable to open file on server" });
  }
};

exports.createClub = async (req, res, next) => {
  try {
    const newClub = new Club(req.body);
    const club = await newClub.save();
    res.status(201).json({ message: "Club created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.deleteClubById = async (req, res, next) => {
  try {
    await Club.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Club deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to delete student" });
  }
};

exports.updateClubById = async (req, res, next) => {
  try {
    await Club.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(201).json({ message: "Club updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to update student" });
  }
};
