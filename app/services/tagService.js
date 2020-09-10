const db = require("../models");
const Tag = db.tags;
const Exercise = db.exercises;
const Exercise_tags = db.exercise_tags;
const Op = db.Sequelize.Op;

exports.tagAllInfoService = async () =>{
    console.log("tagAllInfoService Test")
   let result = await Tag.findAll()
    return result;
}

exports.tagSearchInfoService = async(tag_name)=>{
    console.log("tag test",tag_name)
    let query = `SELECT e.exercise_id, e.title, e.description, e.thumb_url, e.thumb_gif_url, t.tag_name, t.tag_english_name
    FROM exercises AS e JOIN exercise_tags AS et ON e.exercise_id = et.exercise_id JOIN tags AS t
    ON t.tag_id = et.tag_id WHERE t.tag_name LIKE'%${tag_name}%' OR t.tag_english_name LIKE '%${tag_name}%';`

    let result = await db.sequelize.query(query);
    console.log(result[0])
    return result[0];
}

exports.tagsAddService = async(exercise_id,tag_id) => {
    console.log("tagAddService", tag_id)
    let result = await Exercise_tags.create({
        exercise_id: exercise_id,
        tag_id: tag_id
    })

}