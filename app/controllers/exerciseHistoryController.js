const exerciseHistoryService = require('../services/userExerciseHistoryService');

exports.exerciseHistoryPost = async (req,res)=>{
    let exercise_id = req.params.exercise_id
    let user_id = 1; // 임시 유저

    const historyInfo = {
        user_id : user_id,
        exercise_id : exercise_id,
        score: req.body.score,
        play_time: req.body.play_time,
        cal: req.body.cal
    }

    try{
        let result = await exerciseHistoryService.exerciseHistoryPostService(historyInfo)
        res.send({
            message: "exercise 결과 전송 성공",
            code: 200,
            result: result
        })
    }catch(err){
        res.status(500).send({
            message:
              err.message || "Some error occurred while Get the exerciseHistoryPost."
          });
    }  

    
}


exports.exerciseHistoryInfo = async (req,res) =>{
    let user_id = 1
    try{
        let result = await exerciseHistoryService.exerciseHistoryInfoService(user_id);
        res.send({
            message: "운동기록 보기 성공",
            code: 200,
            result: result
        })
    }catch(err){
        res.status(500).send({
            message:
              err.message || "Some error occurred while Get the exerciseHistoryInfo."
          });
    }
}