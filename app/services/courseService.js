const db = require("../models");
const { sequelize } = require("../models");
const Exercise = db.exercises;
const Course = db.courses;
const Op = db.Sequelize.Op;

exports.courseUploadService = async(course_info) => {
    let result = await Course.create({
        user_id: course_info.user_id,
        course_name: course_info.course_name,
        exercise_list: course_info.exercise_list,
        description: course_info.description,
        play_time: course_info.play_time,
        thumb_url: course_info.thumb_url,
        thumb_gif_url: course_info.thumb_gif_url,
        reward: course_info.reward,
        level: course_info.level
    })
    return;
}

exports.courseAllInfoNoUserService = async()=>{
    let result = await Course.findAll({
        where: {
            status: 'ACTIVE'
        }
    })

    return result;
}