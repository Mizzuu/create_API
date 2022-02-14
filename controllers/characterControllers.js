const Character = require("../models/Character.js");

const getHeroes = (req, res) => {
    Character.findByType("hero")
        .select("name _id")
        .exec()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((error) => res.status(500).send(error));
};

const getHero = (req, res) => {
    Character.findOne({ _id: req.params.id })
        .exec()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const postHero = (req, res) => {
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
};

const getVillains = (req, res) => {
    Character.findByType("villain")
        .select("name _id")
        .exec()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((error) => res.status(500).send(error));
};

const getVillain = (req, res) => {
    Character.findOne({ _id: req.params.id })
        .exec()
        .then((results) => {
            res.status(200).json(results);
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

const postVillain = (req, res) => {
    let character = new Character(req.body);
    character
        .save()
        .then((result) => {
            res.set("content-location", `/api/v1/villains/${character._id}`);
            res.status(201).json({
                data: character,
                url: `/api/v1/villains/${character._id}`,
            });
        })
        .catch((error) => {
            res.status(500).send(error);
        });
};

module.exports = {
    getHeroes,
    getHero,
    postHero,
    getVillains,
    getVillain,
    postVillain,
};
