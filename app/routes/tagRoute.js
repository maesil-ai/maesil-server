module.exports = app => {
    const tags = require("../controllers/tagController.js");
  
    var router = require("express").Router();
 
  
   router.get('/', tags.tagAllInfo); // 태그전체보기
   router.get('/:tag_id', tags.tagSearchInfo); // 태그별로 exercise보기

    app.use('/tags', router);
  };
  