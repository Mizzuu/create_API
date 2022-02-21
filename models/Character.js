const res = require("express/lib/response");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CharacterSchema = new Schema({
    name: { type: String, required: true, maxLength: 30 },
    powers: { type: [String], default: ["Super strength"], set: stringToArray },
    type: { type: String, enum: ["hero", "villain"], default: "hero" },
    hp: { type: Number, default: 1 },
});

function stringToArray(powerString) {
    let strings = powerString;
    let arr = strings.split(",");
    let finalArr = arr.map((element) => element.trim());

    return finalArr;
}

CharacterSchema.virtual("description").get(function () {
    if (this.type == "hero") {
        return `${this.name} is a noble ${this.type} whose special power are ${this.powers}`;
    } else {
        return `${this.name} is a nefarious ${this.type} whose special power are ${this.powers}`;
    }
});

CharacterSchema.statics.findByType = function (type) {
    return this.find({ type: type });
};

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
