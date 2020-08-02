module.exports = app => {
    const users = require("../controllers/userController.js");
    const jwtMiddleware = require("../config/jwtMiddleware")
  
    var router = require("express").Router();
 

    router.get("/", jwtMiddleware, users.userInfo); // 유저 정보보기

    app.use('/users', router);
  };
  