const db = require("../models");
const Exercise = db.exercises;
const User = db.users;
const User_Channel = db.user_channel_likes
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

// 채널구독
exports.channelLikesService = async(user_id, channel_name) => {
    let result = await User_Channel.create({
        user_id: user_id,
        channel_name: channel_name
    })

    return;
}

// 구독취소
exports.channelDislikesService = async(user_id, channel_name) => {
    await User_Channel.destroy({
        where: {
            [Op.and]:[
                {
                    user_id: user_id
                },
                {
                    channel_name: channel_name
                }
            ]
        }
    })

    return;
}

exports.channel