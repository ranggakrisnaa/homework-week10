const { User } = require("../models");

const findAll = () => {
  return User.findAll({
    attributes: ["email", "gender", "password", "role"],
  });
};

const findbyId = (id) => {
  return User.findOne({
    where: { id },
    attributes: ["email", "gender", "password", "role"],
  });
};

const create = (args) => {
  return User.create(args);
};

const update = (args, data) => {
  return data.update(args);
};

const destroy = (args) => {
  return args.destroy();
};

module.exports = { findAll, findbyId, create, update, destroy };
