# fitness-tracker

## Description

The fitness tracker app allows users the ability to create a new workout or continue a previous one. The user can add exercises to the pre-existing workout or start a new workout with new exercises. Using the dashboard users can view workout analytics via charts over a 7 day period.

![Image_1](/images/fit-track-home.png)

## Getting Started

1. Clone repository to local directory.
2. Download and install **_Nodejs_**.
3. Open terminal in code editor or via machine.
4. In the terminal, run **_npm install_** to install the dependencies needed.
5. If no dependencies are needed, or you've already install them. Run **_node server.js_** to start the application.

## Built With

- [Nodejs](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [MongoDB](https://www.mongodb.com/3)

##Code Snippet

Using the MongoDB aggregate function to add up all the exercise durations and return the total duration.

```javaScript

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

```

Mongoose Schema model

```javaScript

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
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
        type: Number,
        required: "Enter duration of workout in minutes",
      },
      weight: {
        type: Number,
      },

```

![Image_2](/images/fit-track-dash.png)

## Deployed Link

[Deployed via Heroku](https://nameless-harbor-99466.herokuapp.com/)

## Authors

- **Jaja Brown**
  - [Portfolio](https://jbrown827.github.io/portfolio/)
  - [GitHub](https://github.com/jbrown827)
  - [LinkedIn](https://www.linkedin.com/in/jaja-brown-a42261201)
