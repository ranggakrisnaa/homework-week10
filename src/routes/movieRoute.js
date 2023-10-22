const express = require("express");
const router = express.Router();
const movieController = require("../controllers/api/movieController");
const { upload } = require("../middlewares/uploadFile");
const {
  movieValidate,
  handleValidationErrors,
} = require("../middlewares/validator");

router.post(
  "/movies",
  movieValidate,
  handleValidationErrors,
  movieController.createMovie
);
router.get("/movies", movieController.getMovies);
router.get("/movies/:id", movieController.getMovieId);
router.put(
  "/movies/:id",
  movieValidate,
  handleValidationErrors,
  movieController.updateMovie
);
router.put(
  "/movies/uploads/:id",
  upload.single("file"),
  movieController.uploadImage
);
router.delete("/movies/:id", movieController.deleteMovie);

module.exports = router;
