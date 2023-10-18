const { Movie } = require("../models");

const findAll = () => {
  return Movie.findAll();
};

const findOne = (id) => {
  return Movie.findOne({ where: { id } });
};

const update = (args, id) => {
  return Movie.update(args, { where: { id } });
};

const create = (args) => {
  return Movie.create(args);
};

module.exports = { findAll, create, findOne, update };
