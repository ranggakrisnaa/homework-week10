const express = require("express");
const router = express.Router();
const movieController = require("../controllers/api/movieController");
const { upload, upload2 } = require("../middlewares/uploadFile");

router.post("/movie", movieController.createMovie);
router.get("/movie", movieController.getMovies);
router.get("/movie/:id", movieController.getMovieId);
router.put("/movie/:id", movieController.updateMovie);
router.put(
  "/movie/uploads/:id",
  upload.single("file"),
  movieController.uploadImage
);
router.delete("/movie/:id", movieController.deleteMovie);

module.exports = router;
