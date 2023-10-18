const express = require("express");
const router = express.Router();
const movieController = require("../controllers/api/movieController");
const { upload } = require("../middleware/uploadFile");

router.post("/movie", movieController.createMovie);
router.put("/movie/:id", upload.single("avatar"), movieController.updateMovie);

module.exports = router;
