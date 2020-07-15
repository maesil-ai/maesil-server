const db = require("../models");
const Tag = db.tags;
const Op = db.Sequelize.Op;

exports.tagAllInfoService = async () =>{
    console.log("tagAllInfoService Test")
   let result = await Tag.findAll()
    return result;
}