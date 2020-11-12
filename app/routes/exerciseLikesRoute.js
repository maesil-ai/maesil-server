module.exports = app => {
    const likesController = require("../controllers/exerciseLikesController")
    const jwtMiddleware = require("../config/jwtMiddleware")
    let router = require("express").Router()
    
    router.post("/:exercise_id", jwtMiddleware,likesController.exerciseLikesClick)
    router.delete("/:exercise_id", jwtMiddleware,likesController.exerciseDislikesClick)
    router.get("/", jwtMiddleware, likesController.userExerciseLikeInfo)
    
    app.use('/likes', router)
  };
  