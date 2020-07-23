module.exports = app => {
    const exercises = require("../controllers/exerciseController.js");
    const exerciseHistory = require('../controllers/exerciseHistoryController.js')
    var router = require("express").Router();

  
   router.get("/", exercises.exerciseAllInfo);
   router.get("/:exercise_id", exercises.exerciseOneInfo);

   router.post("/:exercise_id/history", exerciseHistory.exerciseHistoryPost); // 운동 결과 전송 API
  

  
    app.use('/exercises', router);
  };
  