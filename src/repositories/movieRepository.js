const { Movie } = require("../models");

const findAll = () => {
  return Movie.findAll();
};

const create = (args) => {
  return Movie.create(args);
};

module.exports = { findAll, create };
