const express = require("express");
const router = express.Router();
const movieController = require("../controllers/api/movieController");
const { upload } = require("../middlewares/uploadFile");

router.get("/movie", movieController.getMovies);
router.get("/movie/:id", movieController.getMovieId);
router.post("/movie", movieController.createMovie);
router.put("/movie/:id", upload.single("file"), movieController.updateMovie);
router.delete("/movie/:id", movieController.deleteMovie);

module.exports = router;
