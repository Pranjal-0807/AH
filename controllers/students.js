const Student = require("../models/students");
const Profile = require("../models/profile");
const Club = require("../models/clubs");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("profile club");
    res.status(201).json(students);
  } catch (err) {
    res.status(500).json({ message: "Unable to open file on server" });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate("profile");
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: "Unable to open file on server" });
  }
};

exports.createStudent = async (req, res, next) => {
  try {
    const newStudent = new Student(req.body);
    const student = await newStudent.save();
    res.status(201).json({ message: "Student created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

exports.updateStudentById = async (req, res, next) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(201).json({ message: "Student updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to update student" });
  }
};

exports.deleteStudentById = async (req, res, next) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Student deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Unable to delete student" });
  }
};

exports.updateStudentGrades = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    student.grades.push(req.body);
    const ack = await student.save();
    res.json(student);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.createStudentProfile = async (req, res, next) => {
  try {
    const newProfile = new Profile(req.body);
    const profile = await newProfile.save();
    const student = await Student.findById(req.params.id);
    student.profile = profile._id;
    const ack = await student.save();
    res.json(student);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

exports.createStudentClubDetails = async (req, res, next) => {
  try {
    const newClub = new Club(req.body);
    const club = await newClub.save();
    const student = await Student.findById(req.params.id);
    student.club = club._id;
    const ack = await student.save();
    res.json(student);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
