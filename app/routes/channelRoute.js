module.exports = app => {
    const channel = require("../controllers/channelController.js");
    const jwtMiddleware = require("../config/jwtMiddleware")
  
    var router = require("express").Router();

    router.get('/:channel_id', channel.userChannelInfo) // 채널 정보
    router.post('/:channel_id', jwtMiddleware, channel.channelLikesClick) // 채널 구독?좋아요?
    router.delete('/:channel_id', jwtMiddleware, channel.channelDislikesClick) // 채널 구독 취소
    
    router.get('/:channel_id/subscribeInfo', channel.channelSubscribeInfo);

    app.use('/channel', router);
  };
  