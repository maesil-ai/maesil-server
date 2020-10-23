const db = require("../models");
const { sequelize } = require("../models");
const Op = db.Sequelize.Op;

exports.exerciseAllInfoNoUserService = async() => {
    //    let result = await Exercise.findAll({
    //    attributes:{
    //     exclude: [
    //         'skeleton'
    //     ]
    //    },
    //    include: [
    //        {
    //            model: User,
    //            required: true,
    //            attributes: ['nickname'],
    //        },
    //    ],
    //    raw: true,
    //    where: {
    //     status: 'ACTIVE'
    //    },
    // })

    let query = `SELECT e.exercise_id, e.title, e.thumb_url, e.thumb_gif_url, u.nickname, t.tag_name
                FROM users AS u JOIN exercises AS e ON u.user_id=e.user_id JOIN exercise_tags AS et ON e.exercise_id = et.exercise_id
                JOIN tags AS t ON et.tag_id = t.tag_id
                WHERE e.status='ACTIVE';`
        
    let result = await db.sequelize.query(query);

    return result;
}

exports.exerciseAllInfoService = async (user_id) =>{
    console.log("exerciseAllInfoService Test")
    
    // let result = await Exercise.findAll({
    //     include: [
    //         {
    //             model: User,
    //             required: true,
    //             attributes: ['nickname']
    //         }
    //     ],
    //     raw: true,
    //     attributes: {
    //         exclude: [
    //             'skeleton'
    //         ],
    //         include: [
    //             [
    //                 sequelize.literal(`(
    //                     SELECT COUNT(*) FROM user_exercise_likes AS ul
    //                     WHERE exercises.exercise_id = ul.exercise_id
    //                     AND user_id = '${user_id}'
    //                 )
    //                 `),
    //                 'isLike'
    //             ]
    //         ]
    //     },
    //     where: {
    //         status: 'ACTIVE'
    //     }
    // })

    let query = `SELECT e.exercise_id, e.title, e.thumb_url, e.thumb_gif_url, u.nickname, t.tag_name,
                (
                    SELECT COUNT(*) FROM user_exercise_likes AS ul
                    WHERE e.exercise_id = ul.exercise_id
                    AND ul.user_id = '${user_id}'
                ) AS isLike
                FROM users AS u JOIN exercises AS e ON u.user_id=e.user_id JOIN exercise_tags AS et ON e.exercise_id = et.exercise_id
                JOIN tags AS t ON et.tag_id = t.tag_id
                WHERE e.status='ACTIVE';`

    let result = await db.sequelize.query(query);

    return result;
}

exports.exerciseOneInfoService = async (user_id, exercise_id) => {
    let result = await Exercise.findOne({
        attributes: {
            include: [
                [
                    sequelize.literal(`(
                        SELECT COUNT(*) FROM user_exercise_likes AS ul
                        WHERE exercises.exercise_id = ul.exercise_id
                        AND user_id = '${user_id}'
                    )
                    `),
                    'isLike'
                ]
            ]
        },
        where: {
            exercise_id: exercise_id
        }
    })

    return result;
}


exports.exerciseOneInfoNoUserService = async(exercise_id)=>{
    let result = await Exercise.findByPk(exercise_id);
    await result.increment('view_counts', {by:1});
    return result;
}

exports.exerciseUploadService = async(exercise_info) => {
    let result = await Exercise.create({
        user_id : exercise_info.user_id,
        title: exercise_info.title,
        description: exercise_info.description,
        play_time: exercise_info.play_time,
        thumb_url: exercise_info.thumb_url,
        video_url: exercise_info.video_url,
        thumb_gif_url: exercise_info.thumb_gif_url,
        reward: exercise_info.reward,
        skeleton: exercise_info.skeleton,
        level: exercise_info.level
    })
    return result;
}

exports.exerciseIsUserService = async(exercise_id, user_id) => {
    let result = await Exercise.findAll({
        where:{
            exercise_id: exercise_id,
            user_id: user_id,
            status: 'ACTIVE'   
        }
    })

    return result;
}

exports.exercisePoseDataPostService = async(exercise_id) => {
    await Exercise.update(
        {
            status: 'ACTIVE'
        },
        {
            where: {
                exercise_id: exercise_id
            }
        }
    )
}


exports.exerciseDeleteService = async(exercise_id) => {
    await Exercise.update({
        status: 'DELETED'
    },
    {
        where: {
            exercise_id : exercise_id
        }
    }
    )
}
