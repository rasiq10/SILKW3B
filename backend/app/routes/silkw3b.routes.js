module.exports = app =>{
    const silkw3b = require("../controllers/silkw3b.controller.js");
    var router = require("express").Router();

    router.post("/", silkw3b.create);

    app.use('/api/silkw3b',router);
};