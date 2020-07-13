module.exports = app => {
    const videos = require("../controllers/videoController.js");
  
    var router = require("express").Router();
 

  
   router.get("/", videos.videoAllInfo);
   router.get("/:video_id", videos.videoOneInfo);


  
    app.use('/video', router);
  };
  