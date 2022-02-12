const router = require("express").Router({ mergeParams: true });

const {
    getCharacters,
    getCharacter,
    postCharacter,
} = require("../controllers/characterController.js");

router.get("/", getCharacters);
router.get("/:id", getCharacter);
router.post("/", postCharacter);

module.exports = router;
