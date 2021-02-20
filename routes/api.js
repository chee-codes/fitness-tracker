const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/api/workouts", (req, res) => {
  db.Workout.create({})
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => res.json(err));
});

router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

module.exports = router;
