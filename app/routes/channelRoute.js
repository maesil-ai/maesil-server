module.exports = app => {
    const channel = require("../controllers/channelController.js");
    const jwtMiddleware = require("../config/jwtMiddleware")
  
    var router = require("express").Router();

    router.get('/', channel.userChannelInfo);
    app.use('/channel', router);
  };
  