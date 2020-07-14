const db = require("../models");
const Video = db.video_table;
const Op = db.Sequelize.Op;


exports.videoAllInfo = (req,res) => {
    Video.findAll()
    .then(data => {
        console.log(data)
        res.send({
            message: "video url 전체 조회 성공",
            code: 200,
            result: data
        })
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while Get the videoAllInfo."
        });
      });

}


exports.videoOneInfo = (req,res) => {
    let video_id = 1234567;
    video_id = req.params.video_id
    console.log("video log",video_id)
    Video.findByPk(video_id)
    .then(data => {
        console.log(data)
        if(data === null){
            data = [];
        }
        res.send({
            message: "특정 Video 조회 성공",
            code: 200,
            result: data
        })
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while Get the videoOneInfo."
        });
      });

}
