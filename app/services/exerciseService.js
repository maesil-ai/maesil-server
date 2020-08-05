const db = require("../models");
const userRoute = require("../routes/userRoute");
const Exercise = db.exercises;
const ExerciseTag = db.exercise_tags;
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
}

exports.exerciseUploadService = async(exercise_info) => {
    let result = await Exercise.create({
        user_id : 1,
        title: exercise_info.title,
        description: exercise_info.description,
        play_time: exercise_info.play_time,
        thumb_url: exercise_info.thumb_url,
        video_url: exercise_info.video_url,
        reward: exercise_info.reward,
        skeleton: exercise_info.skeleton,
        level: exercise_info.level,
        tag_id: exercise_info.tag_id
    })

    console.log(result, "exercise Upload Service result")

    await ExerciseTag.create({
        exercise_id: result.exercise_id,
        tag_id: exercise_info.tag_id
    })

    return result;
}
