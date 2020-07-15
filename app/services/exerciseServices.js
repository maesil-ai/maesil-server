const db = require("../models");
const Exercise = db.exercises;
const Op = db.Sequelize.Op;

exports.exerciseAllInfoService = async () =>{
    console.log("exerciseAllInfoService Test")
   let result = await Exercise.findAll({
        where: {
            status: 'ACTIVE'
        }
    })
    return result;
}

exports.exerciseOneInfoService = async (exercise_id) => {

    let result = Exercise.findByPk(exercise_id);
    return result;
}

exports.exerciseHistoryPostService = async (historyInfo) => {
    
    let result = Exercise.create(historyInfo);

    return result;
}