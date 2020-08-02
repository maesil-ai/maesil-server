module.exports = app => {
    const likesController = require("../controllers/exerciseLikesController")
    var router = require("express").Router()
    
    router.post("/:exercise_id", likesController.exerciseLikesClick)
    router.delete("/:exercise_id", likesController.exerciseDislikesClick)
  
  
 
    app.use('/likes', router)
  };
  