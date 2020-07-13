const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;


exports.signUp = (req,res) => {
    console.log("회원가입 API")

    const userInfo = {
        useremail: req.body.useremail,
        password: req.body.password,
        name: req.body.name
    }

    User.create(userInfo)
    .then(data => {
        res.send({
            message: "회원가입 성공",
            code: 200
        })
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the UserInfo."
        });
      });
}

exports.testFunction = (req,res) => {
    res.render

}