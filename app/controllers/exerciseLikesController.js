const db = require("../models");
const Exercise_Likes = db.user_exercise_likes;
const exerciseLikes = require("../services/userExerciseLikesService")
const Op = db.Sequelize.Op;

exports.exerciseLikesClick = async(req,res) => {
    let exercise_id = req.params.exercise_id
    let user_id = req.verifiedToken.user_id

    try{
        await exerciseLikes.exerciseLikesService(user_id,exercise_id)
        res.send({
            message: "exercise 좋아요 성공",
            code: 200
        })
        
    }catch(err){
        res.status(500).send({
            message:
            err.message || "Some error occurred while Post the exerciseLikes"
        });
    }
}

exports.exerciseDislikesClick = async(req,res) => {
    let exercise_id = req.params.exercise_id
    let user_id = req.verifiedToken.user_id
    try{
        await exerciseLikes.exerciseDislikesService(user_id,exercise_id)
        res.send({
            message: "exercise 좋아요 취소 성공",
            code: 200
        })
        
    }catch(err){
        res.status(500).send({
            message:
            err.message || "Some error occurred while Post the exerciseDislikes"
        });
    }
}

exports.userExerciseLikeInfo = async(req,res) => {
    let user_id = req.verifiedToken.user_id
    try{
        let result = await exerciseLikes.userExerciseLikeInfoService(user_id)
        res.send({
            message: "좋아요 한 exercise 보기 성공",
            code: 200,
            result: result
        })
        
    }catch(err){
        res.status(500).send({
            message:
            err.message || "Some error occurred while Post the UserExerciseLikeInfo"
        });
    }
}