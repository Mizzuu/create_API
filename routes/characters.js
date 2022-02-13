const router = require("express").Router({ mergeParams: true });

const {
    getHeroes,
    getHero,
    postHero,
    getVillains,
    getVillain,
    postVillain,
} = require("../controllers/characterControllers.js");

router.get("/heroes", getHeroes);
router.get("/heroes/:id", getHero);
router.post("/heroes", postHero);
router.get("/villains", getVillains);
router.get("/villains/:id", getVillain);
router.post("/villains", postVillain);

module.exports = router;
