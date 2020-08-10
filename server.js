const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const passport = require('passport')
const session = require('express-session')
const kakaoKey = require('./app/config/kakaoKey.json')

// var corsOptions = {
//     origin: "http://localhost:8081"
// }


app.use(cors())
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));




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
    

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
