const tagService = require('../services/tagService');
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