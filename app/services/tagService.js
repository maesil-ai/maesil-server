const db = require("../models");
const Tag = db.tags;
const Exercise = db.exercises;
const Op = db.Sequelize.Op;

exports.tagAllInfoService = async () =>{
    console.log("tagAllInfoService Test")
   let result = await Tag.findAll()
    return result;
}

exports.tagSearchInfoService = async(tag_id)=>{
    console.log("tag test",tag_id)
    let result = await Exercise.findAll({
        where: {
            [Op.and]:[
                {
                    status: 'ACTIVE'
                },
                {
                    tag_id: tag_id
                }
            ]
        }
     })
     return result;
    
}