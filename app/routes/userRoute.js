module.exports = app => {
    const users = require("../controllers/userController.js");
  
    var router = require("express").Router();
 

  
    // // Create a new Tutorial
    // router.post("/", tutorials.create);
    router.post("/", users.signUp);


  
    app.use('/api/user', router);
  };
  