module.exports = app => {
    const exercisesHistory = require("../controllers/exerciseHistoryController.js");
    var router = require("express").Router();

  
   router.get("/", exercisesHistory.exerciseHistoryInfo); // 운동기록 보기

  
    app.use('/exercises_history', router);
  };
  