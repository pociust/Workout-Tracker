const router = require("express").Router();
const Workout = require("./../models/workout");
/* add a new workout */
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/:id", (req, res) => {
  Workout.findOne({ _id: req.params.id })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// router.post("/api/workouts/:id", (req, res) => {
//   Workout.updateOne({ id: req.id }, { $push: { exercises: req.body } }, done)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
/* add excercises to a work out */
/* put route /api/workouts/:id */
/* get all workouts */
/* /api/workouts */
/* get last 7 workout */
/*  /api/workouts/range */
/* delete workout */
/* /api/workouts */
module.exports = router;
