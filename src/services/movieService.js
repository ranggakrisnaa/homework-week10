const { movieRepository } = require("../repositories");

const getMovie = () => {
  return movieRepository.findAll();
};

const createMovie = (body) => {
  return movieRepository.create(body);
};

module.exports = { createMovie, getMovie };
