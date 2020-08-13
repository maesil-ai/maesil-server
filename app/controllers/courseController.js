const courseService = require('../services/courseService')
const jwt = require('jsonwebtoken')
const secret_config = require("../config/secret")

exports.courseAllInfo = async(req,res) => {
    try{
        result =  await courseService.courseAllInfoNoUserService();
        res.send({
              message: "course 전체 조회 성공",
              code: 200,
              result: result
          })
      }catch(err){
          res.status(500).send({
              message:
              err.message || "Some error occurred while Get the courseAllInfo."
          });
      }
}