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
    //     }
    // })

    let result = await Exercise_Likes.findAll({
        where: {
            user_id: user_id
        },
        include: [
            {
                model: Exercise,
                required: false,
                attributes: ['exercise_id','title', 'thumb_url', 'video_url', 'play_time', 'like_counts','view_counts'],
            },
            // {
            //     model: User,
            //     required: false,
            //     attributes: ['nickname']
            // }
        ],
        raw: true
    })

    
    return result;
}