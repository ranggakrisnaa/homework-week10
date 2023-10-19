const { movieRepository } = require("../repositories");

const getMovies = (args) => {
  try {
    return movieRepository.findAll(args);
  } catch (error) {
    throw error;
  }
};

const getMovieId = (args) => {
  try {
    const { id } = args;
    console.log(id);
    return movieRepository.findOne(id);
  } catch (error) {
    throw error;
  }
};

const updateMovie = (req, data) => {
  try {
    const { title, genres, year } = req.body;

    let moviePayload = {
      title,
      genres,
      year,
    };

    if (req.file) {
      const file = req.file.filename;
      const imageUrl = `http://localhost:8081/public/${file}`;
      moviePayload = {
        ...moviePayload,
        photo: imageUrl,
      };
    }
    return movieRepository.update(moviePayload, data);
  } catch (error) {
    throw error;
  }
};

const createMovie = (args) => {
  try {
    const { title, genres, year } = args;

    const moviePayload = {
      title,
      genres,
      year,
    };
    return movieRepository.create(moviePayload);
  } catch (error) {
    throw err;
  }
};

const deleteMovie = (args) => {
  try {
    return movieRepository.destroy(args);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMovie,
  getMovies,
  getMovieId,
  updateMovie,
  deleteMovie,
};
