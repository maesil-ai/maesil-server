const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let exercise_logs_schema = new Schema({
    user_id: Number,
    score: Number,
    kcal: Number
});

module.exports = mongoose.model('exercise_logs', exercise_logs_schema);