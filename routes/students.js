const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
  updateStudentGrades,
  createStudentProfile,
  createStudentClubDetails,
} = require("../controllers/students");

router.get("/:id", getStudentById);
router.get("/", getAllStudents);
router.post("/", createStudent);
router.patch("/:id", updateStudentById);
router.delete("/:id", deleteStudentById);
router.patch("/:id/grades", updateStudentGrades);
router.post("/:id/profile", createStudentProfile);
router.post("/:id/clubDetail", createStudentClubDetails);

module.exports = router;
