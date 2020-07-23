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

exports.exerciseUploadService = async(exercise_info) => {
    let result = await Exercise.create({
        user_id : 1,
        title: exercise_info.title,
        description: exercise_info.description,
        play_time: exercise_info.play_time,
        thumb_url: exercise_info.thumb_url,
        video_url: "Test",
        reward: exercise_info.reward
    })

    return result;
}