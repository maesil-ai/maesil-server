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
    // let result = await Course.findAll({
    //     where: {
    //         status: 'ACTIVE'
    //     }
    // })

    let query = `SELECT 
            c.course_id, c.exercise_list, c.course_name, c.like_counts, c.view_counts,
            c.thumb_url, c.thumb_gif_url, u.nickname, u.profile_image,GROUP_CONCAT(t.tag_name) AS tag_list
        FROM users u
            LEFT JOIN courses c ON u.user_id = c.user_id
            LEFT JOIN course_tags ct ON c.course_id = ct.course_id
            LEFT JOIN tags t ON ct.tag_id = t.tag_id 
        WHERE c.status = 'ACTIVE'
        GROUP BY c.course_id;`

    let result = await db.sequelize.query(query);

    return result[0];
}

exports.courseOneInfoNoUserService = async(course_id) => {
    let result = await Course.findOne({
        where: {
            [Op.and]:[
                {
                    status: 'ACTIVE'
                },
                {
                    'course_id': course_id
                }
            ]
        }
    })

    return result;
}