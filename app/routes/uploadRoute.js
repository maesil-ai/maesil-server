const exercise_logs = require("../models/exercise_logs");
const awsConfig = require('../config/awsconfig.json')
const BluebirdPromise = require('bluebird')
const BUCKET_NAME = 'maesil-storage'

module.exports = app => {
    let router = require("express").Router();
    let AWS = require('aws-sdk');
    
    const s3 = new AWS.S3({
        accessKeyId: awsConfig.accessKeyId,
        secretAccessKey: awsConfig.secretAccessKey,
        region: awsConfig.region,
        s3ForcePathStyle: true, // needed with minio?
	    signatureVersion: 'v4'
    });

    router.get('/start-upload', async(req,res) => {
        try {
            let params = {
                Bucket: BUCKET_NAME,
                Key: req.query.fileName,
                ContentType: req.query.fileType
            }

            let createUploadPromised = BluebirdPromise.promisify(s3.createMultipartUpload.bind(s3))
            let uploadData = await createUploadPromised(params)
            console.log(uploadData)
            // uploadId컬럼 추가해서 넣기
            res.send({uploadId: uploadData.UploadId})
        } catch(err){
            console.log(err)
        }
    })

    router.get('/get-upload-url', async(req,res) => {
        try {
            let params = {
                Bucket: BUCKET_NAME,
                Key: req.query.fileName,
                PartNumber: req.query.partNumber,
                UploadId: req.query.uploadId
            }

            console.log(params)
            let uploadPartPromised = BluebirdPromise.promisify(s3.getSignedUrl.bind(s3))
            let presignedUrl = await uploadPartPromised('uploadPart', params)
            res.send({presignedUrl})
        } catch(err){
            console.log(err)
        }
    })

    router.post('/complete-upload', async(req,res,next) => {
        try {
            let params = {
                Bucket: BUCKET_NAME,
                Key: req.body.params.fileName,
                MultipartUpload: {
                    Parts: req.body.params.parts
                },
                UploadId: req.body.params.uploadId
            }

            console.log(params, "completed")
            let completeUploadPromised = BluebirdPromise.promisify(s3.completeMultipartUpload.bind(s3))
            console.log(completeUploadPromised, "completeUpload Promise")
            let data = await completeUploadPromised(params)
            console.log(data, "data")
            res.send({data})

        } catch(err) {
            next(err)
        }
    })

    app.use('/s3', router);
};
