module.exports = (app) => {
  const users = require("../controllers/userController.js");
  const jwtMiddleware = require("../config/jwtMiddleware");

  var router = require("express").Router();

  router.post("/", users.userSignUp); // 회원가입 & 로그인
  router.post("/info", jwtMiddleware, users.userAddInfo); // 유저 추가 정보 입력
  router.get("/", jwtMiddleware, users.userInfo); // 유저 정보보기
  app.use("/users", router);
};
