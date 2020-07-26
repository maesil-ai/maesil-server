const db = require("../models");
const userRoute = require("../routes/userRoute");
const Exercise = db.exercises;
const Op = db.Sequelize.Op;

exports.exerciseAllInfoService = async () =>{
    console.log("exerciseAllInfoService Test")
   let result = await Exercise.findAll({
       where: {
        status: 'ACTIVE'
       },
       order: [
           ['view_counts', 'DESC']
       ]
    })
    return result;
}

exports.exerciseOneInfoService = async (exercise_id) => {
    let result = await Exercise.findByPk(exercise_id);

    await result.increment('view_counts', {by:1});
    return result;

    // Exercise.findByPk(exercise_id).then(exercise =>{
    //     return exercise.increment('view_counts', {by: 1}).then(
    //         result => {
    //             return exercise;
    //         }
    //     )
    // })
}
