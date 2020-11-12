module.exports = app => {
    const exercisesHistory = require("../controllers/exerciseHistoryController.js");
    const jwtMiddleware = require("../config/jwtMiddleware")
    var router = require("express").Router();
  
   router.get("/", jwtMiddleware, exercisesHistory.exerciseHistoryInfo); // 운동기록 보기
   app.use('/exercises_history', router);
  };
  