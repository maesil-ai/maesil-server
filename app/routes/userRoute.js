module.exports = app => {
    const users = require("../controllers/userController.js");
    const jwtMiddleware = require("../config/jwtMiddleware");
    const s3Api = require('../config/s3Api');
  
    var router = require("express").Router();
 

    router.post("/",users.userSignUp); // 회원가입 & 로그인
    router.post("/local", ); // local 회원가입
    router.post("/info", jwtMiddleware,users.userAddInfo); // 유저 추가 정보 입력 
    router.get("/", jwtMiddleware, users.userInfo); // 유저 정보보기

    router.get("/subscribes", jwtMiddleware, users.userSubscribeInfo); // 내가 구독한 유저 List 보여주기

    router.get("/id", users.userNameToId);
    app.use('/users', router);
  };
  