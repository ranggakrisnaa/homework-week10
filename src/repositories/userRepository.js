const { User } = require("../models");

const findAll = () => {
  return User.findAll({
    attributes: ["id", "email", "gender", "password", "role"],
  });
};

const findbyId = (id) => {
  return User.findOne({
    where: { id },
    attributes: ["id", "email", "gender", "password", "role"],
  });
};

module.exports = { findAll, findbyId };
