const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date, 
        default: Date.now()
    },
    exercises: [
        {
            type: Schema.Types.ObjectID,
            ref: "Exercise"
        }
    ],
    totalDuration: {
        type: Number, 
        default: 0
    }
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;