const db = require("../models");
const Exercise = db.exercises;
const User = db.users;
const Op = db.Sequelize.Op;

exports.channelInfoService = async(nickname) => {

    let userResult = await User.findOne({
        where: {
            nickname: nickname
        }
    })

    console.log(userResult, "userResult")
    let result = await Exercise.findAll({
        where: {
            [Op.and]:[
                {
                    status: 'ACTIVE'
                },
                {
                    user_id: userResult.user_id
                }
            ]
        }
    })
    // let result = await Exercise.findAll({
    //     include: [
    //         {
    //             model: User,
    //             required: false,
    //             attributes: ['nickname']
    //         }
    //     ],
    //     raw: true
    // })
    

    return result;
}