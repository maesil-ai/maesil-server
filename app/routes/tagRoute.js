module.exports = app => {
    const tags = require("../controllers/tagController.js");
  
    var router = require("express").Router();
 
  
   router.get('/', tags.tagAllInfo);

    app.use('/tags', router);
  };
  