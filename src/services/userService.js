const { userRepository } = require("../repositories");

const getUser = () => {
  return userRepository.findAll();
};

const getUserId = (id) => {
  return userRepository.findbyId(id);
};

module.exports = { getUser, getUserId };
