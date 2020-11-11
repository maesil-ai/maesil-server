const exercise_logs = require("../models/exercise_logs");
const awsConfig = require('../config/awsconfig.json')
module.exports = app => {
    let router = require("express").Router();
    let AWS = require('aws-sdk');
    let fs = require('fs');
    const s3 = new AWS.S3();
    var multiparty = require('connect-multiparty'),
    multipartyMiddleware = multiparty();

    AWS.config.update('../config/awsconfig.json')
    AWS.config.update({
        httpOptions: {timeout: 12000000},
        concurrentParts: 5,
        waitTime: 60000,
        retries: 5,
        sdkRetries: 6,
        maxPartSize: 5 * 1024 * 1024
    })

    router.post('/s', multipartyMiddleware, function(req,res){

        let file = req.files.file;
        let buffer = fs.readFileSync(file.path);

        let startTime = new Date();
        let partNum = 0;
        let partSize = 1024*1024*5;
        let numPartsLeft = Math.ceil(buffer.length / partSize);
        let maxUploadTries = 3;
        
        let multipartParams = {
            Bucket: 'maesil-storage',
            Key: file.name + startTime,
            ContentType: file.type
        };

        let multipartMap = {
            Parts: []
        };

        console.log('Creating multipart upload for:', file.name);

        s3.createMultipartUpload(multipartParams, function(mpErr, multipart){
            if (mpErr) return console.error('Error!', mpErr);
            console.log('Got upload ID', multipart.UploadId);

            for(let start = 0; start < buffer.length; start += partSize){
                
                partNum++;
                let end = Math.min(start + partSize, buffer.length);
                let partParams = {
                    Body: buffer.slice(start,end),
                    Bucket: multipartParams.Bucket,
                    Key: multipartParams.Key,
                    PartNumber: String(partNum),
                    UploadId: multipart.UploadId
                };

                console.log('Uploading part: #', partParams.PartNumber, ', Start:', start);
                uploadPart(s3, multipart, partParams);
            }

            return res.json({
                message: "완료"
            })

        });

        function uploadPart(s3, multipart, partParams, tryNum){
            let tryNumber = tryNum || 1;
            s3.uploadPart(partParams, function(multiErr, mData){
                console.log('started');
                console.log(mData)
                if(multiErr){
                    console.log('Upload part error:', multiErr);

                    if(tryNumber < maxUploadTries){
                        console.log('Retrying upload of part: #', partParams.PartNumber);
                        uploadPart(s3, multipart, partParams, tryNumber + 1);
                    } else {
                        console.log('Failed uploading part: #', partParams.PartNumber);
                    }
                }

                multipartMap.Parts[this.request.params.PartNumber - 1] = {
                    ETag: mData.ETag,
                    PartNumber: Number(this.request.params.PartNumber)
                };

                console.log('Completed part', this.request.params.PartNumber);
                console.log('mData', mData);
                if (--numPartsLeft > 0) return; // complete only when all parts uploaded

                var doneParams = {
                    Bucket: multipartParams.Bucket,
                    Key: multipartParams.Key,
                    MultipartUpload: multipartMap,
                    UploadId: multipart.UploadId
                };

                console.log('Completing upload...');
                completeMultipartUpload(s3,doneParams);
            }).on('httpUploadProgress', function(progress){console.log(Math.round(progress.loaded/progress.total*100)+ '% done') })
        }

        function completeMultipartUpload(s3, doneParams){
            s3.completeMultipartUpload(doneParams, function(err,data){
                if(err) return console.error('An error occured while completing multipart upload');
                let delta = (new Date() - startTime) / 1000;
                console.log('Completed upload in', delta, 'seconds');
                console.log('Final upload data:', data);
            })
        }


    })
    

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
        exercise_logs.find(function(err, exerciseLogs){
        if(err) return res.status(500).send({error: 'database failure'})
        res.json(exerciseLogs)
       })
    })

    app.use('/test', router);
};
