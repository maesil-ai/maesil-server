const db = require("../models");
const { sequelize } = require("../models");
const User = db.users;
const User_Channel = db.user_channel_likes
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

exports.modifyProfileImage = async(user_email, profile_image) => {
   let query = 'UPDATE users SET profile_image = :profile_image WHERE email = :user_email;'
   let value = {
       profile_image: profile_image,
       user_email: user_email
   }

   await db.sequelize.query(query, {replacements: value})
}

exports.signUp = async (user_email, accessToken, profile_image)=>{
    await User.create({
        email: user_email,
        password: accessToken,
        profile_image: profile_image,
        stats: ''
    })
    return;
}

exports.userInfoService = async(user_id) => {
    let result = await User.findOne({
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

    return result;
}

exports.userSubscribeService = async(user_id) => {
   let query = 'SELECT u.user_id, u.nickname, u.level FROM users AS u JOIN user_channel_likes AS ucl ON u.user_id = ucl.channel_id WHERE ucl.user_id = :user_id;'
   let value = {
       user_id: user_id
   }
   let datas = await db.sequelize.query(query, {replacements: value})

   console.log(datas[0]);
   
   let result = datas[0]

   return result;
}

exports.userTodayTotalService = async(user_id) => {
    console.log(user_id)
    let query = `SELECT DATE(started_at) AS today_date, SEC_TO_TIME(SUM(play_time)) AS total_time, SUM(kcal) AS total_kcal, SUM(similarity_value) AS similarity_value FROM user_exercise_history WHERE user_id=:user_id GROUP BY today_date;`
   let value = {
       user_id: user_id
   }
   let datas = await db.sequelize.query(query, {replacements: value})
   return datas[0];
}

exports.userNameToIdService = async(nickname) => {
    let result = await User.findOne({
        attributes: [
            'user_id',
            'nickname'
        ],
        where: {
            nickname: nickname
        }
    })

    return result;
}
