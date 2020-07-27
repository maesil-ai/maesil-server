
let router = require("express").Router();
const exerciseService = require('../services/exerciseService')
const s3Api = require('../config/s3Api');
module.exports = app => {

   router.post('/', s3Api.fields([{ name: 'exercise' }, { name: 'thumbnail' }]), async function(req,res){
       console.log(req.files.exercise[0].location)
       console.log(req.files.thumbnail)

       const exerciseInfo = {
        user_id : 1,
        title: req.body.title,
        description: req.body.description,
        play_time: req.body.play_time,
        thumb_url: req.files.thumbnail[0].location,
        video_url: req.files.exercise[0].location,
        reward: req.body.reward,
        level: req.body.level,
        tag_id: req.body.tag_id
    }

       await exerciseService.exerciseUploadService(exerciseInfo)
       res.send({
           "code": 200,
           "message": "exercise 업로드 성공"
       })
   })

  
    app.use('/upload', router);
  };