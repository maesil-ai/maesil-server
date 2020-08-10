const dbConfig = require("../config/database")

var Sequelize = require("sequelize");
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


db.users = require('./users')(sequelize, Sequelize);
db.exercises = require('./exercises')(sequelize, Sequelize);
db.tags = require('./tags')(sequelize, Sequelize);
db.user_exercise_history = require('./user_exercise_history')(sequelize, Sequelize);
// db.courses = require('./courses')(sequelize, Sequelize);

db.users_tag_likes = require('./users_tag_likes')(sequelize, Sequelize);
db.user_exercise_likes = require('./user_exercise_likes')(sequelize, Sequelize);
db.user_course_likes = require('./user_course_likes')(sequelize, Sequelize);
db.user_channel_likes = require('./user_channel_likes')(sequelize, Sequelize);

db.exercise_tags = require('./exercise_tags')(sequelize, Sequelize);
db.course_tags = require('./course_tags')(sequelize, Sequelize);

db.exercises.belongsToMany(db.user_exercise_likes, {through: 'userLikeExercise'});
db.user_exercise_likes.belongsToMany(db.exercises, {through: 'userLikeExercise'});


module.exports = db;

