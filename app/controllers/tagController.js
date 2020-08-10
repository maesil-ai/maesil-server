const tagService = require('../services/tagService');
let url = require('url')
exports.tagAllInfo = async (req,res) => {
    try{
      let result =  await tagService.tagAllInfoService()
      console.log(result)
      res.send({
            message: "tag 전체 조회 성공",
            code: 200,
            result: result
        })
    }catch(err){
        res.status(500).send({
            message:
            err.message || "Some error occurred while Get the exerciseAllInfo."
        });
    }
}

exports.tagSearchInfo = async (req,res) => {
    const tag_id = req.params.tag_id
    console.log(req.params);
    try{
      let result =  await tagService.tagSearchInfoService(tag_id);
      console.log(result)
      res.send({
            message: "tag별 운동조회 성공",
            code: 200,
            result: result
        })
    }catch(err){
        res.status(500).send({
            message:
            err.message || "Some error occurred while Get the TagSearchInfo."
        });
    }
}