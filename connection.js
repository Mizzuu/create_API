const mongoose = require("mongoose");

let mongoDB = `mongodb+srv://mizuhot:02071993@cluster0.bhxp4.mongodb.net/a4-hero?retryWrites=true&w=majority`;

module.exports = mongoose.connect(mongoDB);
