// const Character = require('../../')

const getHeroes = (req, res) => {
    res.send("sending array of heroes");
};

const getHero = (req, res) => {
    res.send("sending hero with id:" + req.params.id);
};

const postHero = (req, res) => {
    res.send("Hero created");
};

const getVillains = (req, res) => {
    res.send("sending array of villains");
};

const getVillain = (req, res) => {
    res.send("sending hero with id:" + req.params.id);
};

const postVillain = (req, res) => {
    res.send("villain created");
};

module.exports = {
    getHeroes,
    getHero,
    postHero,
    getVillains,
    getVillain,
    postVillain,
};
