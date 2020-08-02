const db = require("../models");
const Exercise_Likes = db.user_exercise_likes;
const exerciseLikes = require("../services/userExerciseLikesService")
const Op = db.Sequelize.Op;

exports.exerciseLikesClick = async(req,res) => {
    let exercise_id = req.params.exercise_id
    let user_id = 1
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
    let user_id = 1
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