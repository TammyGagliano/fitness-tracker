// database 
const db = require('../models');

module.exports = (app) => {
    
    // workout routes 
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if(err) {
                console.log(error);
            } else {
                res.json(workouts)
            }
        });
    });

    // add exercise
    app.put('api/workouts/:workout', ({ params, body}, res) => {
        db.Workout.findOneAndUpdate({ _id: params.id}, 
            {push: {exercises:body }}, 
            { upsert: true, useFindAndModify: false}, 
                updatedWorkout => {
                    res.json(updatedWorkout);
                })
    });

    // create new workout 
    app.post('/api/workouts', (req, res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });
}