const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const passport = require('passport')
const session = require('express-session')
const kakaoKey = require('./app/config/kakaoKey.json')
const mongoose = require('mongoose')
const documentDatabase = require('./app/config/documentDatabase')

// let fs = require('fs');
// let ca = [fs.readFileSync('./rds-combined-ca-bundle.pem')]

// var corsOptions = {
//     origin: "http://localhost:8081"
// }

app.use(cors())


// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
// app.use(express.static(path.join(__dirname, '/app/public')));

app.use(express.json({limit: '100mb'}));

app.use(express.static('/client/build'));

app.use(
    session({
        secret: kakaoKey.secretKey,
        cookie: {
            maxAge: 60 * 60 * 1000,
        },
        resave: true,
        saveUninitialized: false,
    })
)
app.use(passport.initialize());
app.use(passport.session());


const mongo_db = mongoose.connection;
mongo_db.on('error', console.error);
mongo_db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongodb server");
});

// mongoose.connect(documentDatabase.url, {
//     useNewUrlParser: true,
//     sslValidate: true,
//     sslCA: fs.readFileSync('./rds-combined-ca-bundle.pem'),
//     useUnifiedTopology: true
// }, function(err, client){
//     if(err) throw err;
//     console.log("document db success")
// })

mongoose.connect('mongodb://172.17.0.1/maesil_log')


const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});


require("./app/routes/userRoute")(app);
require("./app/routes/exerciseRoute")(app);
require('./app/routes/tagRoute')(app);
require('./app/routes/s3Route')(app);
require('./app/routes/exerciseHistoryRoute')(app);
require('./app/routes/exerciseLikesRoute')(app);
require('./app/routes/channelRoute')(app);
require('./app/routes/courseRoute')(app);
require('./app/routes/testRoute')(app);
require('./app/routes/searchRoute')(app);
require('./app/routes/uploadRoute')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
