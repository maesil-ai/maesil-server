const db = require("../models");
const ChannelService = require('../services/channelService')
const jwt = require('jsonwebtoken')
const secret_config = require('../config/secret')

exports.userChannelInfo = async (req,res) => {
    const nickname = req.query.nickname
    console.log(nickname, "nickname")
    let result = await ChannelService.channelInfoService(nickname)
    res.json({
        message: "channel 조회 성공",
        code: 200,
        result: result
    });
}

exports.channelLikesClick = async(req,res) => {
    const user_id = req.verifiedToken.user_id
    const channel_name = req.query.nickname

    await ChannelService.channelLikesService(user_id, channel_name)
    res.json({
        message: "Channel 구독 성공",
        code: 200
    })
}

exports.channelDislikesClick = async(req,res) => {
    let user_id = req.verifiedToken.user_id
    const channel_name = req.query.nickname

    await ChannelService.channelDislikesService(user_id, channel_name)
    res.json({
        message: "Channel 구독 취소 성공",
        code: 200
    })

}