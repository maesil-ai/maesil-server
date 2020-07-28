const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.isUser = async (user_email)=> {
    let result = await User.findAll({
        where: {
            email: user_email
        }
    })

    console.log(result, "result")
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

exports.userInfoService = async(user_id) => {
    let result = await User.findByPk(user_id)
    return result;
}