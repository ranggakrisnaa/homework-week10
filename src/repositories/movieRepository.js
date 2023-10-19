const { Movie } = require("../models");

const findAll = () => {
  return Movie.findAll({
    attributes: ["title", "genres", "year", "photo"],
  });
};

const findOne = (id) => {
  return Movie.findOne({
    where: { id },
    attributes: ["title", "genres", "year", "photo"],
  });
};

const update = async (args, id) => {
  const data = await Movie.findOne({
    where: { id },
  });
  return data.update(args);
};

const create = (args) => {
  return Movie.create(args);
};

const destroy = async (id) => {
  const data = await Movie.findOne({
    where: { id },
  });
  return data.destroy();
};

module.exports = { findAll, create, findOne, update, destroy };
