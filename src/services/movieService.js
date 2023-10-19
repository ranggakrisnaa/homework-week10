const { movieRepository } = require("../repositories");

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

const getMovies = (args) => {
  try {
    return movieRepository.findAll(args);
  } catch (error) {
    throw error;
  }
};

const getMovieId = (id) => {
  try {
    return movieRepository.findOne(id);
  } catch (error) {
    throw error;
  }
};

const updateMovie = (req, id) => {
  try {
    const { title, genres, year } = req.body;
    console.log(title);
    let moviePayload = {
      title,
      genres,
      year,
    };

    return movieRepository.update(moviePayload, id);
  } catch (error) {
    throw error;
  }
};

const uploadImage = (req, id) => {
  try {
    let imagePayload = {};
    if (req.file) {
      const file = req.file.filename;

      const imageUrl = `http://localhost:8081/public/${file}`;
      imagePayload = {
        photo: imageUrl,
      };
    }
    return movieRepository.update(imagePayload, id);
  } catch (error) {
    throw error;
  }
};

const deleteMovie = (id) => {
  try {
    return movieRepository.destroy(id);
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
  uploadImage,
};
