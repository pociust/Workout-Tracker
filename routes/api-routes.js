const Workout = require("../models/workout");
const router = require("express").Router();

//add a new workout

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//add exercises to a workout
//put route /api/workouts/:id
//workout id with push to array


//get all workouts
// /api/workouts


/* get specific workout 
get last 7 workouts
/api/workouts/range*/

//deletee workout
// /api/workouts






module.exports = router;
