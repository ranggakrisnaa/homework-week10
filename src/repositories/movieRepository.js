const { Movie } = require("../models");

const findAll = () => {
  return Movie.findAll();
};

const findOne = (id) => {
  return Movie.findOne({ where: { id } });
};

const create = (args) => {
  console.log(args);
  return Movie.create(args);
};

module.exports = { findAll, create, findOne };
