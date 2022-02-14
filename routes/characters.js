const router = require("express").Router({ mergeParams: true });

const {
    getHeroes,
    getHero,
    postHero,
    getVillains,
    getVillain,
    postVillain,
} = require("../controllers/characterControllers.js");

router.get("/", getHeroes);
router.get("/:id", getHero);
router.post("/", postHero);
router.get("/", getVillains);
router.get("/:id", getVillain);
router.post("/", postVillain);

module.exports = router;
