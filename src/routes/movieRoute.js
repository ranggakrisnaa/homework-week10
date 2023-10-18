const express = require("express");
const router = express.Router();
const movieController = require("../controllers/api/movieController");

router.post("/movie", movieController.createMovie);
router.put("/movie", movieController.updateMovie);

module.exports = router;
