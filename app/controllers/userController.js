const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const UserService = require('../services/userService')

exports.userInfo = async (req,res) => {
    const user_id = req.params.user_id
    let result;
    try{
      result =  await UserService.userInfoService(user_id)
      console.log(result)
      res.send({
            message: "user 정보조회 성공",
            code: 200,
            result: result
        })
    }catch(err){
        res.status(500).send({
            message:
            err.message || "Some error occurred while Get the UserInfo."
        });
    }
} 