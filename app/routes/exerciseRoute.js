const jwtMiddleware = require("../config/jwtMiddleware.js");

module.exports = app => {
    const exercises = require("../controllers/exerciseController.js");
    const exerciseHistory = require('../controllers/exerciseHistoryController.js')
    const jwtMiddleware = require("../config/jwtMiddleware")
    var router = require("express").Router();

  
   router.get("/", exercises.exerciseAllInfo); // exercise 전체보기
   router.get("/:exercise_id",exercises.exerciseOneInfo); // exercise 상세보기
   router.post("/:exercise_id/history", exerciseHistory.exerciseHistoryPost); // 운동 결과 전송 API
   router.delete("/:exercise_id", jwtMiddleware, exercises.exerciseDeleteOne);
  
    app.use('/exercises', router);
  };


  