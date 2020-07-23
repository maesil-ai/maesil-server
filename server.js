const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express();
const path = require("path")
const https = require("https")
const sslport = 443;
const fs = require('fs')

// const clientApp = path.join(__dirname, './client/build')


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



// require("greenlock-express")
//     .init({
//         packageRoot: __dirname,
//         configDir: "./app/config/config.json",
 
//         // contact for security and critical bug notices
//         maintainerEmail: "boyunzzang1@naver.com",
 
//         // whether or not to run at cloudscale
//         cluster: false
//     })
//     // Serves on 80 and 443
//     // Get's SSL certificates magically!
//     .serve(app);

    

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});


// try {
//     const option = {
//       ca: fs.readFileSync('/etc/letsencrypt/live/maesil.ai/fullchain.pem'),
//       key: fs.readFileSync(('/etc/letsencrypt/live/maesil.ai/privkey.pem'), 'utf8').toString(),
//       cert: fs.readFileSync(('/etc/letsencrypt/live/maesil.ai/cert.pem'), 'utf8').toString(),
//     };
  
//     https.createServer(option, app).listen(sslport, () => {
//       console.log(`[HTTPS] Soda Server is started on port ${colors.cyan(sslport)}`);
//     });
//   } catch (error) {
//     console.log('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.');
//     console.log(error);
//   }