const db = require("../models");
const Exercise_Likes = db.user_exercise_likes;
const User = db.User;
const Exercise = db.exercises;
const Op = db.Sequelize.Op;

// 좋아요 여부 검사
exports.isLikeService = async(user_id, exercise_id) => {
    let result = await Exercise_Likes.findAll({
        where: {
            user_id: user_id,
            exercise_id: exercise_id
        }
    })
    return result;
}

// 좋아요 하기
exports.exerciseLikesService = async(user_id, exercise_id) => {
    await Exercise_Likes.create({
        user_id: user_id,
        exercise_id: exercise_id
    })

    await Exercise.increment(
        'like_counts', {by: 1, where: {exercise_id: exercise_id}}
    )
    return;
}

// 좋아요 취소
exports.exerciseDislikesService = async(user_id, exercise_id)=>{
    await Exercise_Likes.destroy({
        where: {
            [Op.and]:[
                {
                    user_id: user_id
                },
                {
                    exercise_id: exercise_id
                }
            ]
        }
    })

    await Exercise.decrement(
        'like_counts', {by: 1, where: {exercise_id: exercise_id}}
    )
    return;
}

// 좋아요 한 영상 보기
exports.userExerciseLikeInfoService = async (user_id) => {
 
    // let result = await Exercise_Likes.findAll({
    //     where: {
    //         user_id: user_id
    //     },
    //     include: [
    //         {
    //             model: Exercise,
    //             required: false,
    //             attributes: ['exercise_id','title', 'thumb_url', 'video_url', 'play_time', 'like_counts','view_counts'],
    //         },
    //         // {
    //         //     model: User,
    //         //     required: false,
    //         //     attributes: ['nickname']
    //         // }
    //     ],
    //     raw: true
    // })

    let query = `SELECT e.exercise_id, e.title, e.thumb_url, e.thumb_gif_url, e.video_url,
                e.view_counts, e.like_counts,
                (SELECT usr.nickname FROM users usr WHERE e.user_id=usr.user_id) nickname
                FROM exercises AS e JOIN user_exercise_likes AS uel
                ON uel.exercise_id = e.exercise_id
                JOIN users AS u
                ON u.user_id = uel.user_id WHERE uel.user_id = :user_id;`
    let value = {
        user_id: user_id
    }
    let datas = await db.sequelize.query(query, {replacements: value})
 
    console.log(datas[0]);
    
   return datas[0];
}