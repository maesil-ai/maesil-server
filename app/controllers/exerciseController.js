const exerciseService = require('../services/exerciseService')
const exerciseLikes = require('../services/userExerciseLikesService')

exports.exerciseAllInfo = async (req,res) => {
    let result;
    try{
      result =  await exerciseService.exerciseAllInfoService()
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
    let user_id = 1
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
        let isLikeResult = exerciseLikes.isLikeService(user_id, exercise_id)
        if(isLikeResult < 1){
            console.log(result)
            result.dataValues.isLike = false
        } else {
            result.dataValues.isLike = true
            console.log(result.dataValues, "True")
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


exports.exerciseDeleteOne = async (req,res) => {
    const user_id = req.verifiedToken.user_id
    console.log(user_id)
    const exercise_id = req.params.exercise_id

    let exerciseIsUser = await exerciseService.exerciseIsUserService(exercise_id, user_id)
    
    console.log(exerciseIsUser, " exerciseIsUser")

    if(exerciseIsUser.length < 1){
        return res.send({
            message: "삭제 권한이 없습니다",
            code: 403
        })
    }

    let result = await exerciseService.exerciseDeleteService(exercise_id)

    res.send({
        message: "exercise 삭제 성공",
        code: 200
    })
}
