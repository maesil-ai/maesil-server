
let router = require("express").Router();
const exerciseService = require('../services/exerciseService');
const tagService = require('../services/tagService');
const s3Api = require('../config/s3Api');
const jwtMiddleware = require('../config/jwtMiddleware');
const aws = require('aws-sdk');
const env = require('../config/sqsEnvironment');

const QUEUE_URL = env.sqs.queueUrl;
aws.config.update(env.aws);

module.exports = app => {
   router.post('/', jwtMiddleware,s3Api.fields([{ name: 'exercise' }, { name: 'thumbnail' }, {name: 'gif_thumbnail'}]), async function(req,res){
       console.log(req.body, "s3Api req log")
       const exerciseInfo = {
        user_id : req.verifiedToken.user_id,
        title: req.body.title,
        description: req.body.description,
        play_time: req.body.play_time,
        thumb_url: req.files.thumbnail[0].location,
        video_url: req.files.exercise[0].location,
        thumb_gif_url: req.files.gif_thumbnail[0].location,
        reward: req.body.reward,
        skeleton: req.body.skeleton,
        level: req.body.level
    }
        let tags = JSON.parse(req.body.tags)

        let uploadResult;

        try{
            uploadResult = await exerciseService.exerciseUploadService(exerciseInfo)
            for(let i =0;i<tags.length;i++){
                await tagService.tagsAddService(uploadResult.exercise_id, tags[i].tag_id)
            }
        } catch(err){
            return res.status(500).send({
                message:
                err.message || "Some error occurred while Get the S3 upload"
            });
        }

        // sqs 객체 생성
        const sqs = new aws.SQS(env.sqs.apiVersion);

        console.log(uploadResult, "uploadResult")
        console.log(exerciseInfo.video_url, "videourl")

        const message = {
            "exercise_id":  uploadResult.exercise_id,
            "video_url": exerciseInfo.video_url
        }

        const PARAMS = {
            QueueUrl: QUEUE_URL,
            MessageBody: JSON.stringify(message),
            DelaySeconds: 0
        };

        sqs.sendMessage(PARAMS).promise().then(() => {
            console.log('Message 전송 성공');
        }).catch(error => {
            console.error(error);
        })

        return res.send({
            "code": 200,
            "message": "exercise 업로드 성공"
        })
   })

  
    app.use('/upload', router);
  };