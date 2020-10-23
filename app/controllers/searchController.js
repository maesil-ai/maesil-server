const searchService = require('../services/searchService')
const jwt = require('jsonwebtoken')
const secret_config = require("../config/secret")

exports.allSearchInfo = async (req,res) => {
    const title = req.query.title
    console.log(req.query.title)

    try{
      let exerciseResult =  await searchService.exerciseSearchInfoService(title);
      console.log(exerciseResult)
      let courseResult =  await searchService.courseSearchInfoService(title);

      console.log(courseResult)
      res.send({
            message: "검색 성공",
            code: 200,
            exerciseResult: exerciseResult,
            courseResult: courseResult
        })

    }catch(err){
        res.status(500).send({
            message:
            err.message || "Some error occurred while Get the SearchInfo."
        });
    }
}