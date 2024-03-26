const dbConfig = require("../../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.silkw3b = require("./silkw3b.model.js")(mongoose);

module.exports = db;
