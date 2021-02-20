const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  excercise: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter a type of workout",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of the workout",
      },
      duration: {
        type: String,
        trim: true,
        required: "Enter duration of workout in minutes",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;