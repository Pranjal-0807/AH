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
  age: {
    type: Number,
    min: 1,
    max: 1000,
    validate: {
      validator: (val) => val % 2 == 0,
      message: (prop) => `${prop.value} is not even`,
    },
  },
  grades: {
    type: [GradeSchema],
    default: [],
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  club: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      name: String,
    },
  ],
  updatedAt: Date,
});

// Virtual method
StudentSchema.methods.calculateGpa = function () {
  if (!this.grades.length) return 0;
  const totalGrades = this.grades.reduce((sum, grade) => sum + grade.score, 0);
  const totalMAXGrades = this.grades.reduce(
    (sum, grade) => sum + grade.maxScore,
    0
  );
  return (totalGrades / totalMAXGrades) * 10;
};

//Virtual Property
StudentSchema.virtual("clubsCount").get(function () {
  return this.club.length;
});

StudentSchema.virtual("currentGpa").get(function () {
  return this.calculateGpa();
});

// To include virtuals in the output on postman
StudentSchema.set("toJSON", { virtuals: true });

// Middleware to run before saving a document to the database
StudentSchema.pre("save", function (next) {
  console.log(`Student ${this.name} is about to be saved`);
  this.updatedAt = Date.now();
  next();
});

StudentSchema.post("save", function (doc, next) {
  console.log(`Student ${doc.name} has been saved`);
  next();
});

module.exports = mongoose.model("Student", StudentSchema, "students");
