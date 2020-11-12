
module.exports = app => {
    const maesilSearch = require("../controllers/searchController")
    const jwtMiddleware = require("../config/jwtMiddleware")
    let router = require("express").Router();

    router.get('/search', maesilSearch.allSearchInfo);
    app.use('/all', router);
  };

  