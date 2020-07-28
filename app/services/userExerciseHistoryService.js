const db = require("../models");
const ExerciseHistory = db.user_exercise_history;
const Op = db.Sequelize.Op;

exports.exerciseHistoryPostService = async (historyInfo) => {
    
    let result = ExerciseHistory.create(historyInfo);

    return result;
}

exports.exerciseHistoryInfoService = async (user_id) => {
    let result = ExerciseHistory.findAll({
        where: {
            user_id: user_id
        }
    })

    return result;
}