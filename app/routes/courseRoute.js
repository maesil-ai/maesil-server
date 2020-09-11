
let router = require("express").Router()
const courseService = require('../services/courseService')
const courseApi = require('../config/courseApi')
const jwtMiddleware = require('../config/jwtMiddleware')
const courseController = require('../controllers/courseController')
const tagService = require('../services/tagService')
module.exports = app => {
   router.post('/', jwtMiddleware,courseApi.fields([{ name: 'thumbnail' }, {name: 'gif_thumbnail'}]), async function(req,res){
       console.log(req.files, "course req log")
       const courseInfo = {
        user_id : req.verifiedToken.user_id,
        course_name: req.body.course_name,
        exercise_list: req.body.exercise_list,
        description: req.body.description,
        play_time: req.body.play_time,
        thumb_url: req.files.thumbnail[0].location,
        thumb_gif_url: req.files.gif_thumbnail[0].location,
        reward: req.body.reward,
        level: req.body.level
    }

    let tags = JSON.parse(req.body.tags)
    try{
        let result = await courseService.courseUploadService(courseInfo);
        for(let i = 0; i < tags.length; i++){
            await tagService.tagsCourseAddService(result.course_id, tags[i].tag_id)
        }
    }catch(err){
        return res.status(500).send({
            message:
              err.message || "Some error occurred while Get the S3 Course upload"
          });
    } 
       return res.send({
           "code": 200,
           "message": "course 업로드 성공"
       })
   });

    router.get('/', courseController.courseAllInfo);
    router.get('/:course_id', courseController.courseOneInfo);
    

  
    app.use('/courses', router);
  };