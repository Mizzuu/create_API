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
    return `${this.name} is a ${this.type} whose special power are ${this.powers}`;
});
// .set(function (v) {
//     this.set({ name, type, powers });
// });

CharacterSchema.statics.findByType = function (type) {
    return this.find({ type: "villain" });
};

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;
