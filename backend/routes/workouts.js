const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

//require auth for all workout routes
router.use(requireAuth);

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
