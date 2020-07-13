const dbConfig = require("../config/database")

var Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
  
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });



var db = {}; 

db.sequelize = sequelize; 
db.Sequelize = Sequelize; 


db.user = require('./user')(sequelize, Sequelize);
db.video_table = require('./video')(sequelize, Sequelize);

module.exports = db;

