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
    let query = `SELECT e.exercise_id, e.title, e.thumb_url, e.thumb_gif_url, SEC_TO_TIME(SUM(eh.play_time)) AS total_time, SUM(eh.kcal) AS total_kcal, SUM(eh.similarity_value) FROM exercises AS e
    JOIN user_exercise_history AS eh ON e.exercise_id=eh.exercise_id WHERE eh.user_id=:user_id GROUP BY e.exercise_id;`

    let value = {
        user_id: user_id
    }
    let result = await db.sequelize.query(query, {replacements: value})

    return result[0];
}