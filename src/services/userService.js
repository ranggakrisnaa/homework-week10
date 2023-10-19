const { userRepository } = require("../repositories");

const createUser = (args) => {
  try {
    const { email, password, gender, role } = args;
    const userPayload = {
      email,
      gender,
      password,
      role,
    };

    return userRepository.create(userPayload);
  } catch (error) {
    throw error;
  }
};

const getUsers = () => {
  try {
    return userRepository.findAll();
  } catch (error) {
    throw error;
  }
};

const getUserId = (args) => {
  try {
    const { id } = args;
    return userRepository.findbyId(id);
  } catch (error) {
    throw error;
  }
};

const updateUser = (req, data) => {
  try {
    const { email, role, gender, password } = req.body;
    const userPayload = {
      email,
      role,
      password,
      gender,
    };

    return userRepository.update(userPayload, data);
  } catch (error) {
    throw error;
  }
};

const deleteUser = (args) => {
  try {
    return userRepository.destroy(args);
  } catch (error) {
    throw error;
  }
};

module.exports = { getUsers, getUserId, createUser, updateUser, deleteUser };
