const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const UserService = require('../services/userService')
const jwt = require('jsonwebtoken')
const secret_config = require('../config/secret')

exports.userInfo = async (req,res) => {
    const token = req.verifiedToken
    console.log(token.user_id)
    let result;
    try{
      result =  await UserService.userInfoService(token.user_id)
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

exports.userSignUp = async (req,res) => {
    const user_info = {
        id: req.body.id,
        profile_image_url: req.body.profile_image_url,
        access_token: req.body.access_token
    }

    console.log(user_info);
    try{
      let isSignInUser = await UserService.isUser(user_info.id)
      if(isSignInUser.length >= 1){

        console.log(isSignInUser, "isSignInUser")
        let token = await jwt.sign(
            {
                user_id: isSignInUser[0].user_id
            },
            secret_config.jwtsecret,
            {
                expiresIn: 7200,
                subject: 'userInfo'
            }
        )
        console.log(isSignInUser.length, "length check")
        res.send({
            message: "로그인 성공",
            code: 200,
            jwt: token
        })
      } else{
          let result =  await UserService.signUp(user_info.id, user_info.access_token, user_info.profile_image_url)
          let result_isUser = await UserService.isUser(user_info.id);
          
            console.log(result)
            let token = await jwt.sign(
                {
                    user_id: result_isUser[0].user_id
                },
                secret_config.jwtsecret,
                {
                    expiresIn: 7200,
                    subject: 'userInfo'
                }
            )
            res.send({
                    message: "회원가입 성공",
                    code: 201,
                    jwt: token
                })
        }
        }catch(err){
        res.status(500).send({
            message:
            err.message || "Some error occurred while Get the UserSignIn || SignUp."
        });
    }
} 

exports.userAddInfo = async (req,res) => {
    const token = req.verifiedToken
    console.log(token)
    const user_info = {
        nickname: req.body.nickname,
        gender: req.body.gender,
        weight: req.body.weight,
        height: req.body.height
    }

    console.log(user_info);

    let result = await UserService.userAddInfoService(token.user_id, user_info.nickname, user_info.gender, user_info.weight, user_info.height)
    res.send({
        message: "추가 정보 입력 성공!",
        code: 200,
        result: result
    })
} 

exports.userLocalSignUp = async (req,res) => {
    
}


exports.userSubscribeInfo = async(req,res) => {
    const token = req.verifiedToken
    let result = await UserService.userSubscribeService(token.user_id)
    res.send({
        message: "구독한 채널 List 조회 성공",
        code: 200,
        result: result
    })
}

exports.userNameToId = async(req,res)=>{
    const nickname = req.query.nickname
    let result = await UserService.userNameToIdService(nickname);

    res.send({
        message: "Name To Id",
        code: 200,
        result: result
    })
}