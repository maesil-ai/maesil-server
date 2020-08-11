const db = require("../models");
const { exerciseAllInfoNoUserService } = require("./exerciseService");
const { sequelize } = require("../models");
const Exercise = db.exercises;
const User = db.users;
const User_Channel = db.user_channel_likes
const Op = db.Sequelize.Op;9



exports.channelInfoNoUserService = async(nickname) => {

    let result = await Exercise.findAll({
        include: [
            {
                model: User,
                required: true,
                attributes: ['nickname']
            }
        ],
        raw: true,
        where: {
            status: 'ACTIVE'
        }
    })

    result.push({
        isLike: 0
    })

    return result;

}
exports.channelInfoService = async(user_id,nickname) => {
    let result = await Exercise.findAll({
        include: [
            {
                model: User,
                required: true,
                attributes: ['nickname']
            }
        ],
        raw: true,
        where: {
            status: 'ACTIVE'
        }
    })

    let userIsLikeResult = await User_Channel.findOne({
        where: {
            [Op.and]:[
                {
                    user_id: user_id
                },
                {
                    channel_id: result[0].user_id
                }
            ]
        }
    })
    
    if(userIsLikeResult){
        result.push({
            isLike: 1
        })
    }else{
        result.push({
            isLike: 0
        })
    }
    console.log(userIsLikeResult)

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

exports.channel