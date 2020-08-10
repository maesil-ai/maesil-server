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