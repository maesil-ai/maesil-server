const db = require("../models");
const ExerciseHistory = db.user_exercise_history;
const User = db.users
const Op = db.Sequelize.Op;

exports.exerciseHistoryPostService = async (historyInfo) => {
    const score = historyInfo.score
    const user_id = historyInfo.user_id
    let result = await ExerciseHistory.create(historyInfo);
    await User.increment({
        points: +score
    },{
        where: {user_id: user_id}
    })

    return result;
}

exports.exerciseHistoryInfoService = async (user_id) => {
    let result = await ExerciseHistory.findAll({
        where: {
            user_id: user_id
        }
    });

    return result;
}