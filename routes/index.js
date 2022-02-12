const router = require("express").Router({ mergeParams: true });

const characterRouter = require("./characters.js");
const locationRouter = require("./locations.js");

router.use("/characters", characterRouter);
router.use("/locations", locationRouter);

module.exports = router;
