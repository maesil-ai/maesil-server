const db = require("../models");
const ChannelService = require('../services/channelService')
const jwt = require('jsonwebtoken')
const secret_config = require('../config/secret')

exports.userChannelInfo = async (req,res) => {
    const channel_id = req.params.channel_id
        let result = await ChannelService.channelInfoService(channel_id)
        res.json({
            message: "channel 조회 성공",
            code: 200,
            result: result
        });
}

exports.channelLikesClick = async(req,res) => {
    const user_id = req.verifiedToken.user_id
    const channel_id = req.params.channel_id

    await ChannelService.channelLikesService(user_id, channel_id)
    res.json({
        message: "Channel 구독 성공",
        code: 200
    })
}

exports.channelDislikesClick = async(req,res) => {
    let user_id = req.verifiedToken.user_id
    const channel_id = req.params.channel_id

    await ChannelService.channelDislikesService(user_id, channel_id)
    res.json({
        message: "Channel 구독 취소 성공",
        code: 200
    })
}


exports.channelSubscribeInfo = async(req,res) => {
    const channel_id = req.params.channel_id
    const token = req.headers['x-access-token'] || req.query.token

    if(!token){
        let result = await ChannelService.channelSubscribeInfoNoUserService(channel_id)
        res.json({
            message: "Channel Subscribe 정보 조회 성공",
            code: 200,
            result: result
        })
    }else{
        await jwt.verify(token, secret_config.jwtsecret, async(err, verifiedToken) => {
            if(err) throw err;
            let user_id = verifiedToken.user_id
            try{
                let result = await ChannelService.channelSubscribeInfoService(user_id, channel_id)
               
                res.send({
                    message: "특정 Channel 구독정보 조회 성공",
                    code: 200,
                    result: result
                })
            }catch(err){
                res.status(500).send({
                    message:
                      err.message || "Some error occurred while Get the channelSubscribeInfo."
                  });
            }  


    })
    }
}