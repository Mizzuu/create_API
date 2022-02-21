const Character = require("../models/Character.js");

const getCharacters = (req, res) => {
    let characterType = req.params.who;
    if (characterType == "heroes") {
        Character.findByType("hero")
            .select("name _id")
            .exec()
            .then((results) => {
                res.status(200).json(results);
            })
            .catch((error) => res.status(500).send(error));
    } else if (characterType == "villains") {
        Character.findByType("villain")
            .select("name _id")
            .exec()
            .then((results) => {
                res.status(200).json(results);
            })
            .catch((error) => res.status(500).send(error));
    } else {
        res.status(404).send("error");
    }
};

const getCharacter = (req, res) => {
    let characterType = req.params.who;
    if (characterType == "heroes") {
        Character.findOne({ _id: req.params.id })
            .exec()
            .then((results) => {
                res.status(200).json(results.toJSON({ virtuals: true }));
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    } else if (characterType == "villains") {
        Character.findOne({ _id: req.params.id })
            .exec()
            .then((results) => {
                res.status(200).json(results.toJSON({ virtuals: true }));
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    } else {
        res.status(404).send("error");
    }
};

const postCharacter = (req, res) => {
    let characterType = req.params.who;
    if (characterType == "heroes") {
        let character = new Character(req.body);
        character
            .save()
            .then((result) => {
                res.set("content-location", `/api/v1/heroes/${character._id}`);
                res.status(201).json({
                    data: character,
                    url: `/api/v1/heroes/${character._id}`,
                });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    } else if (characterType === "villains") {
        let character = new Character(req.body);
        character
            .save()
            .then((result) => {
                res.set(
                    "content-location",
                    `/api/v1/villains/${character._id}`
                );
                res.status(201).json({
                    data: character,
                    url: `/api/v1/villains/${character._id}`,
                });
            })
            .catch((error) => {
                res.status(500).send(error);
            });
    } else {
        res.status(404).send("error");
    }
};

module.exports = {
    getCharacters,
    getCharacter,
    postCharacter,
};
