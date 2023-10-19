const { movieService } = require("../../services");

const createMovie = async (req, res, next) => {
  try {
    if (!req.body.title || !req.body.genres || !req.body.genres)
      throw { name: "errNotFound" };
    await movieService.createMovie(req.body);

    res.status(201).json({ message: "Movie Created Successfully" });
  } catch (error) {
    next(error);
  }
};

const getMovies = async (req, res) => {
  try {
    const movies = await movieService.getMovies();

    res.status(200).json({ succes: true, data: movies });
  } catch (error) {
    res.json({ error: error });
  }
};

const getMovieId = async (req, res, next) => {
  try {
    const movie = await movieService.getMovieId(req.params.id);
    if (!movie) throw { name: "errNotFound" };

    res.status(200).json({ succes: true, data: movie });
  } catch (error) {
    next(error);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = await movieService.getMovieId(id);
    if (!movie) throw { name: "errNotFound" };
    await movieService.updateMovie(req, id);

    res
      .status(200)
      .json({ succes: true, message: "Movie Updated Successfully" });
  } catch (error) {
    next(error);
  }
};

const uploadImage = async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = await movieService.getMovieId(id);
    if (!movie) throw { name: "errNotFound" };
    await movieService.uploadImage(req, id);

    res
      .status(200)
      .json({ succes: true, message: "Insert Photo in Movie Successfully" });
  } catch (error) {
    next(error);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = await movieService.getMovieId(id);
    if (!movie) throw { name: "errNotFound" };
    await movieService.deleteMovie(id);

    res
      .status(200)
      .json({ succes: true, message: "Movie Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createMovie,
  updateMovie,
  getMovies,
  getMovieId,
  deleteMovie,
  uploadImage,
};
