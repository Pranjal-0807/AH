const express = require("express");
const router = express.Router();

const {
  getAllClubs,
  getClubById,
  createClub,
  deleteClubById,
  updateClubById,
} = require("../controllers/clubs");

router.get("/", getAllClubs);
router.post("/", createClub);
router.get("/:id", getClubById);
router.delete("/:id", deleteClubById);
router.patch("/:id", updateClubById);

module.exports = router;
