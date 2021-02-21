const router = require("express").Router();
const Workout = require("../models/Workout");

router.get("/api/workouts", (req, res) => {
  Workout.find({})
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

router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
