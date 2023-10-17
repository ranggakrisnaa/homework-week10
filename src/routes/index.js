const userRoute = require("./userRoute");
const movieRoute = require("./movieRoute");
const express = require("express");
const router = express.Router();

router.use(userRoute);
router.use(movieRoute);

module.exports = router;
