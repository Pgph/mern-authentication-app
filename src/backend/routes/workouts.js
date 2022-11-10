const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require("../controllers/workoutController");

//GET all of workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

//POST a workout
router.post("/", createWorkout);

//UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a workout" });
});

//DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a workout" });
});

module.exports = router;
