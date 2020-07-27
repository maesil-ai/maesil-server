const exerciseService = require('../services/exerciseService');

exports.exerciseAllInfo = async (req,res) => {
    let result;
    try{
      result =  await exerciseService.exerciseAllInfoService()
      console.log(result)
      res.send({
            message: "exercise 전체 조회 성공",
            code: 200,
            result: result
        })
    }catch(err){
        res.status(500).send({
            message:
            err.message || "Some error occurred while Get the exerciseAllInfo."
        });
    }
}

exports.exerciseOneInfo = async (req,res) => {
    let exercise_id = 1234567;
    exercise_id = req.params.exercise_id
    console.log("exercise log",exercise_id)

    try{
        let result = await exerciseService.exerciseOneInfoService(exercise_id)


        if(result === null){
            return res.send({
                message: "exercise 정보 없음",
                code: 204,
                result: result
            })
        }
        res.send({
            message: "특정 exercise 상세조회 성공",
            code: 200,
            result: result
        })
    }catch(err){
        res.status(500).send({
            message:
              err.message || "Some error occurred while Get the exerciseOneInfo."
          });
    }  

}

