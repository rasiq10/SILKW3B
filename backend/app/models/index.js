const dbConfig = require("../../config/db.config.js");
const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url || process.env.mongo_url;
db.silkw3b = require("./silkw3b.model.js")(mongoose);

module.exports = db;

