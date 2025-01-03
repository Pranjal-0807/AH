const mongoose = require("mongoose");

const GradeSchema = mongoose.Schema({
  course: String,
  score: Number,
  maxScore: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

const StudentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gpa: {
    type: Number,
    default: 3,
  },
  courses: {
    type: [String],
    default: ["Math"],
  },
  age: Number,
  grades: {
    type: [GradeSchema],
    default: [],
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  club: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Club",
  },
});

module.exports = mongoose.model("Student", StudentSchema, "students");
