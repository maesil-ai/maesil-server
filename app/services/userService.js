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

exports.signUp = async (user_email, accessToken, nickname)=>{
    await User.create({
        email: user_email,
        password: accessToken,
        nickname: nickname
    })
    return;
}

exports.userInfoService = async(user_email) => {
    let result = await User.findAll({
        where: {
            email: user_email
        }
    })
    return result;
}