const { Movie } = require("../models");

const findAll = () => {
  return Movie.findAll();
};

const findOne = () => {
  return Movie.findOne();
};

const create = (args) => {
  console.log(args);
  return Movie.create(args);
};

module.exports = { findAll, create, findOne };
