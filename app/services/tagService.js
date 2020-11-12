const db = require("../models");
const Tag = db.tags;
const Exercise = db.exercises;
const Exercise_tags = db.exercise_tags;
const Course_tags = db.course_tags;
const Op = db.Sequelize.Op;

exports.tagAllInfoService = async () =>{
    console.log("tagAllInfoService Test")
   let result = await Tag.findAll()
    return result;
}

exports.tagSearchInfoService = async(tag_name)=>{
    console.log("tag test",tag_name)
    let query = `SELECT u.user_id, u.nickname, u.profile_image, e.exercise_id, e.title, e.description, e.thumb_url, e.thumb_gif_url,
                e.like_counts, e.view_counts, GROUP_CONCAT(t.tag_name) AS tag_list
                FROM users AS u
    LEFT JOIN exercises AS e ON u.user_id = e.user_id
    LEFT JOIN exercise_tags AS et ON e.exercise_id = et.exercise_id 
    LEFT JOIN tags AS t
    ON t.tag_id = et.tag_id WHERE t.tag_name LIKE'%${tag_name}%'
    GROUP BY e.exercise_id;`

    let result = await db.sequelize.query(query);
    return result[0];
}

exports.tagCourseSearchInfoService = async(tag_name) => {
    console.log("tag Course Search test",tag_name)
    let query = `SELECT u.user_id, u.nickname, u.profile_image, c.course_id, c.course_name, c.description, c.thumb_url, c.thumb_gif_url, 
                c.like_counts, c.view_counts, GROUP_CONCAT(t.tag_name) AS tag_list
    FROM users AS u
    LEFT JOIN courses AS c ON u.user_id = c.user_id
    LEFT JOIN course_tags AS ct ON c.course_id = ct.course_id 
    LEFT JOIN tags AS t
    ON t.tag_id = ct.tag_id WHERE t.tag_name LIKE'%${tag_name}%'
    GROUP BY c.course_id;`

    let result = await db.sequelize.query(query);
    return result[0];
}

exports.tagsAddService = async(exercise_id,tag_id) => {
    console.log("tagAddService", tag_id)
    let result = await Exercise_tags.create({
        exercise_id: exercise_id,
        tag_id: tag_id
    })
}

exports.tagsCourseAddService = async(course_id, tag_id) => {
    console.log("tagCourseAddService", tag_id)
    let result = await Course_tags.create({
        course_id: course_id,
        tag_id: tag_id
    })
}