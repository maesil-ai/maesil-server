const exercise_logs = require("../models/exercise_logs");

module.exports = app => {
    let router = require("express").Router();

    router.post('/test', function(req,res){
        let exerciseLogs = new exercise_logs();
        exerciseLogs.user_id = req.body.user_id
        exerciseLogs.score = req.body.score
        exerciseLogs.kcal = req.body.kcal

        exerciseLogs.save(function(err){
            if(err){
                console.error(err);
                res.json({result: 0});
                return;
            }
    
            res.json({result: 1});
        });
    })

    router.get('/testget', function(req,res){
       const result =  exercise_logs.find(function(err, exerciseLogs){
        if(err) return res.status(500).send({error: 'database failure'})
        res.json(exerciseLogs)
       })
    })
    app.use('/test', router);
};
