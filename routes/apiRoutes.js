const router = require('express').Router();

//db
const db = require("../models");

  // Get all workouts 
  router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // Creates a new workout in the workout database
  router.post("/api/workouts", async (req, res) => {
    try {
      const response = await db.Workout.create({ type: "workout" });
      res.json(response);
    } catch (err) {
      console.log("An error occurred creating a workout: ", err);
    }
  });

  // Adds an exercise, set id, push to model, set true
  router.put("/api/workouts/:id", ({ body, params }, res) => {
    // console.log(body, params)
    const workoutId = params.id;
    let savedExercises = [];

    // gets all the currently saved exercises in the current workout
    db.Workout.find({ _id: workoutId })
      .then(dbWorkout => {
        // console.log(dbWorkout)
        savedExercises = dbWorkout[0].exercises;
        res.json(dbWorkout[0].exercises);
        let allExercises = [...savedExercises, body];
        console.log(allExercises);
        updateWorkout(allExercises);
      })
      .catch(err => {
        res.json(err);
      });

    function updateWorkout(exercises) {
      db.Workout.findByIdAndUpdate(
        workoutId,
        { exercises: exercises },
        function (err, doc) {
          if (err) {
            console.log(err);
          }
        })}
  })

  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(workout => {
        res.json(workout);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router;