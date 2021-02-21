const router = require("express").Router();
const Workout = require("../models/Workout.js");

router.get("/api/workouts", (req, res) => {
  Workout.find([
    { $addFields: { totalDuration: { $sum: "exercises.duration" } } },
  ])
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => res.json(err));
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
