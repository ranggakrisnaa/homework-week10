const { User } = require("../models");

const findAll = () => {
  return User.findAll({ attributes: ["email", "role", "password", "gender"] });
};

const findbyId = (id) => {
  return User.findOne({
    where: { id },
    attributes: ["email", "role", "password", "gender"],
  });
};

const create = (args) => {
  return User.create(args);
};

const update = async (args, id) => {
  const data = await User.findOne({
    where: { id },
  });
  return data.update(args);
};

const destroy = async (id) => {
  const data = await User.findOne({
    where: { id },
  });
  return data.destroy();
};

module.exports = { findAll, findbyId, create, update, destroy };
