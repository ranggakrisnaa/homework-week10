const { Movie } = require("../models");

const findAll = () => {
  return Movie.findAll({
    attributes: ["title", "year", "genres", "photo"],
  });
};

const findOne = (id) => {
  return Movie.findOne({
    where: { id },
    attributes: ["title", "year", "genres", "photo"],
  });
};

const update = (args, data) => {
  return data.update(args);
};

const create = (args) => {
  return Movie.create(args);
};

const destroy = (args) => {
  return args.destroy();
};

module.exports = { findAll, create, findOne, update, destroy };
