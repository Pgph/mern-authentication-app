const express = require("express");
const router = express.Router();
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

//GET all of workouts
router.get("/", getWorkouts);

//GET a single workout
router.get("/:id", getWorkout);

//POST a workout
router.post("/", createWorkout);

//UPDATE a workout
router.patch("/:id", updateWorkout);

//DELETE a workout
router.delete("/:id", deleteWorkout);

module.exports = router;
