const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// 이 id로 가입 한 유저가 있는지 검사
exports.isUser = async (user_email)=> {
    let result = await User.findAll({
        where: {
            email: user_email
        }
    })
    return result;
}

exports.signUp = async (user_email, accessToken, profile_image_url)=>{
    await User.create({
        email: user_email,
        password: accessToken,
        profile_image_url: profile_image_url,
        stats: ''
    })
    return;
}

exports.userInfoService = async(user_id) => {
    let result = await User.findAll({
        where: {
            user_id: user_id
        }
    })
    return result;
}

exports.userAddInfoService = async (user_id,nickname, gender, weight, height) => {
    
    let result = await User.update({
        nickname: nickname,
        gender: gender,
        weight: weight,
        height: height
    },
    {
        where: {
            user_id: user_id
        }
    })

}