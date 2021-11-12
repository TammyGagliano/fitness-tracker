const router = require('express').Router();

//db
const db = require("../models/exercise");

// Get all workouts 
router.get("/api/workouts", (req, res) => {
    db.find()
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.json(err);
      });
});

// Get request 
router.get("/api/workouts/range", (req, res) => {
    db.find()
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.json(err);
      });
});

// Creates a new workout in the workout database
router.post("/api/workouts", ({ body }, res) => {
    db.create(body)
    .then((dbData) => {
        res.json(dbData);
    })
    .catch((err) => {
        res.json(err);
    });
});


// Post Workout 
router.put("/api/workouts/:id", ({ body, params }, res) => {
    db.findByIdAndUpdate(params.id, { $push: { exercises: body } } )
      .then(dbData => {
        res.json(dbData);
      })
      .catch(err => {
        res.json(err);
      });
    });

module.exports = router;