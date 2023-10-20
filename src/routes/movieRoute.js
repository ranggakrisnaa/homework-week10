const express = require("express");
const router = express.Router();
const movieController = require("../controllers/api/movieController");
const { upload } = require("../middlewares/uploadFile");
const {
  movieValidate,
  handleValidationErrors,
} = require("../middlewares/validator");

router.post(
  "/movie",
  movieValidate,
  handleValidationErrors,
  movieController.createMovie
);
router.get("/movie", movieController.getMovies);
router.get("/movie/:id", movieController.getMovieId);
router.put(
  "/movie/:id",
  movieValidate,
  handleValidationErrors,
  movieController.updateMovie
);
router.put(
  "/movie/uploads/:id",
  upload.single("file"),
  movieController.uploadImage
);
router.delete("/movie/:id", movieController.deleteMovie);

module.exports = router;
