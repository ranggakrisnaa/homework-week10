const { movieRepository } = require("../repositories");

const getMovies = () => {
  return movieRepository.findAll();
};

const getMovieId = (id) => {
  return movieRepository.findOne(id);
};

const updateMovie = (args, id) => {
  return movieRepository.update(args, id);
};

const createMovie = (args) => {
  return movieRepository.create(args);
};

module.exports = { createMovie, getMovies, getMovieId, updateMovie };
