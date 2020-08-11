const db = require("../models");
const { exerciseAllInfoNoUserService } = require("./exerciseService");
const { sequelize } = require("../models");
const Exercise = db.exercises;
const User = db.users;
const User_Channel = db.user_channel_likes
const Op = db.Sequelize.Op;

exports.channelInfoService = async(channel_id) => {
    let result = await Exercise.findAll({
        include: [
            {
                model: User,
                required: true,
                attributes: ['nickname', 'user_id']
            }
        ],
        raw: true,
        where: {
            [Op.and]:[
                {
                    status: 'ACTIVE'
                },
                {
                    'user_id': channel_id
                }
            ]
        }
    })

    console.log(result)
    return result;
}

// 채널구독
exports.channelLikesService = async(user_id, channel_id) => {
    let result = await User_Channel.create({
        user_id: user_id,
        channel_id: channel_id
    })

    return;
}

// 구독취소
exports.channelDislikesService = async(user_id, channel_id) => {
    await User_Channel.destroy({
        where: {
            [Op.and]:[
                {
                    user_id: user_id
                },
                {
                    channel_id: channel_id
                }
            ]
        }
    })

    return;
}

exports.channelSubscribeInfoNoUserService = async(channel_id) => {
    let result = await User.findOne({
        attributes: {
            exclude: [
                'password',
                'gender',
                'weight',
                'height',
                'points',
                'created_at',
                'updated_at'
            ],
            include: [
                [
                    sequelize.literal(`(
                        SELECT COUNT(*) FROM user_channel_likes AS ucl
                        WHERE ucl.channel_id = '${channel_id}'
                        AND users.user_id = ucl.channel_id
                    )`),
                    'subscribe'
                ]
            ]
        },
        where: {
            user_id : channel_id
        }
    })

    return result;
}

exports.channelSubscribeInfoService = async(user_id, channel_id) => {
    let result = await User.findOne({
        attributes: {
            exclude: [
                'password',
                'gender',
                'weight',
                'height',
                'points',
                'created_at',
                'updated_at'
            ],
            include: [
                [
                    sequelize.literal(`(
                        SELECT COUNT(*) FROM user_channel_likes AS ucl
                        WHERE ucl.channel_id = '${channel_id}'
                        AND users.user_id = ucl.channel_id
                    )`),
                    'subscribe'
                ],
                [
                    sequelize.literal(`(
                        SELECT COUNT(*) FROM user_channel_likes AS ucl
                        WHERE ucl.channel_id = '${channel_id}'
                        AND ucl.user_id = '${user_id}'
                    )`),
                    'isLike'
                ]
            ]
        },
        where: {
            user_id: channel_id
        }
    })
    return result;
}





exports.channel