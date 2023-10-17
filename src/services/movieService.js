const { movieRepository } = require("../repositories");

const getMovie = () => {
  return movieRepository.findAll();
};

const createMovie = (args) => {
  return movieRepository.create(args);
};

module.exports = { createMovie, getMovie };
