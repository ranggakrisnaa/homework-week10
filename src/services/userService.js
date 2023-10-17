const { userRepository } = require("../repositories");

const getUsers = () => {
  return userRepository.findAll();
};

const getUserId = (id) => {
  return userRepository.findbyId(id);
};

module.exports = { getUsers, getUserId };
