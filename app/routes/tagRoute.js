module.exports = app => {
    const tags = require("../controllers/tagController.js");
  
    var router = require("express").Router();
 
  
   router.get('/', tags.tagAllInfo);
   router.get('/:tag_id', tags.tagSearchInfo);

    app.use('/tags', router);
  };
  