module.exports = app => {
    const channel = require("../controllers/channelController.js");
    const jwtMiddleware = require("../config/jwtMiddleware")
  
    var router = require("express").Router();

    router.get('/', channel.userChannelInfo) // 채널 정보
    router.post('/', jwtMiddleware, channel.channelLikesClick) // 채널 구독?좋아요?
    router.delete('/', jwtMiddleware, channel.channelDislikesClick) // 채널 구독 취소
    
    app.use('/channel', router);
  };
  