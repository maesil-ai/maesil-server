
let router = require("express").Router();
const exerciseService = require('../services/exerciseService')
const s3Api = require('../config/s3Api');
module.exports = app => {

   router.post('/', s3Api.single('exercise'), async function(req,res){
       let video_url = req.file.location;
       console.log(video_url)

       const exerciseInfo = {
        user_id : 1,
        title: req.body.title,
        description: req.body.description,
        play_time: req.body.play_time,
        thumb_url: req.body.thumb_url,
        video_url: video_url,
        reward: req.body.reward
    }

    await exerciseService.exerciseUploadService(exerciseInfo);
       res.send({
           "code": 200,
           "message": "exercise 업로드 성공"
       })
   })

  
    app.use('/upload', router);
  };