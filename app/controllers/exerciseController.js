const exerciseService = require('../services/exerciseService')
const exerciseLikes = require('../services/userExerciseLikesService')
const jwt = require('jsonwebtoken')
const secret_config = require("../config/secret")

exports.exerciseAllInfo = async (req,res) => {

    const token = req.headers['x-access-token'] || req.query.token
    if(!token){
        try{
            result =  await exerciseService.exerciseAllInfoNoUserService()
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

    } else {

        await jwt.verify(token, secret_config.jwtsecret, async(err, verifiedToken) => {
            if(err) throw err;
            
            let user_id = verifiedToken.user_id
            console.log(user_id)
            try{
                result = await exerciseService.exerciseAllInfoService(user_id)
                return res.send({
                      message: "exercise 전체 조회 성공",
                      code: 200,
                      result: result
                  })
              }catch(err){
                  return res.status(500).send({
                      message:
                      err.message || "Some error occurred while Get the exerciseAllInfo."
                  });
              }
        })
    }
}

exports.exerciseOneInfo = async (req,res) => {
    let exercise_id = 1234567;
    exercise_id = req.params.exercise_id
    const token = req.headers['x-access-token'] || req.query.token

    if(!token){
        try{
            result =  await exerciseService.exerciseOneInfoNoUserService(exercise_id)
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

    } else {
        await jwt.verify(token, secret_config.jwtsecret, async(err, verifiedToken) => {
            if(err) throw err;
            let user_id = verifiedToken.user_id
            try{
                let result = await exerciseService.exerciseOneInfoService(user_id, exercise_id)
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
        })
    }
}

exports.exercisePoseDataPost = async (req,res) => {
    const exercise_id = req.params.exercise_id

    const result = req.body.success
    console.log(result, "ml server result")


    try{
        
        if(result){
            let exerciseResult = await exerciseService.exercisePoseDataPostService(exercise_id)
        } else {
            await exerciseService.exercisePoseDataFailService(exercise_id)
        }
    
        res.send({
            message: "exercise pose data post 성공",
            code: 200
        })

    }catch(err){
        res.status(500).send({
            message:
              err.message || "Some error occurred while Get the exercise pose data post."
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
