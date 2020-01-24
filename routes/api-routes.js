const router = require("express").Router();
const Workout = require("./../models/workout");

/* add a new workout */

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

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

// router.get("/api/workouts/range", (req, res) => {
//   Workout.find(
//     {},
//     {
//       exercises: { $slice: -7 }
//     }
//   )
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

router.put("/api/workouts/:id", (req, res) => {
  Workout.update(
    {
      _id: req.params.id
    },
    {
      $push: {
        exercises: [
          {
            type: req.body.type,
            name: req.body.name,
            duration: req.body.duration,
            weight: req.body.weight,
            reps: req.body.reps,
            sets: req.body.sets,
            distance: req.body.distance
          }
        ]
      }
    }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.delete("/workouts/:id", (req, res) => {
  Workout.findByIdAndRemove(req.params.id)
    .exec()
    .then(doc => {
      if (!doc) {
        return res.status(404).end();
      }
      return res.status(204).end();
    })
    .catch(err => next(err));
});

module.exports = router;
