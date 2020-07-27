
let router = require("express").Router();
const exercises = require("../controllers/exerciseController.js");
const s3Api = require('../config/s3Api');
module.exports = app => {


   router.post('/', s3Api.single('exercise'), function(req,res){
       let exerciseFile = req.file;

       console.log(exerciseFile);
       res.send({
           "message": "exercise 업로드 성공"
       })
   })

  
    app.use('/upload', router);
  };