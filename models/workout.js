const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date, 
        default: Date.now()
    },
    exercise [
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