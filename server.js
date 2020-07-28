const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();

// var corsOptions = {
//     origin: "http://localhost:8081"
// }


app.use(cors())
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/app/public')));

app.use(express.static('/client/build'));


const db = require("./app/models");
db.sequelize.sync(); // sequelize 싱크하기
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


// simple route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/passportRoute")(app);
require("./app/routes/userRoute")(app);
require("./app/routes/exerciseRoute")(app);
require('./app/routes/tagRoute')(app);
require('./app/routes/s3Route')(app);
require('./app/routes/exerciseHistoryRoute')(app);

    

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});
