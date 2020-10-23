const db = require("../models");
const { sequelize } = require("../models");
const Op = db.Sequelize.Op;

exports.exerciseSearchInfoService = async(title) => {

    let query = `SELECT exercise_id, title, description, thumb_url, thumb_gif_url FROM exercises
    WHERE title LIKE'%${title}%';`

    let result = await db.sequelize.query(query);
    return result[0];
}


exports.courseSearchInfoService = async(title) => {
    let query = `SELECT course_id, course_name, description, thumb_url, thumb_gif_url
    FROM courses WHERE course_name LIKE'%${title}%';`

    let result = await db.sequelize.query(query);
    return result[0];
}