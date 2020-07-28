module.exports = app => {
    const users = require("../controllers/userController.js");
  
    var router = require("express").Router();
 

    router.get("/:user_id", users.userInfo); // 유저 정보보기

    app.use('/users', router);
  };
  