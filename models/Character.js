const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CharacterSchema = new Schema({
    name: { type: String, required: true, maxLength: 30 },
    powers: { type: [String], default: ["Super strength"], set: stringToArray },
    type: { type: String, enum: ["hero", "villain"], default: "hero" },
    hp: { type: Number, default: 1 },
});
const Character = mongoose.model("Character", CharacterSchema);

function stringToArray(powerString) {
    let strings = powerString.trim();
    let arr = strings.split(",");

    return arr;
}

module.exports = Character;
