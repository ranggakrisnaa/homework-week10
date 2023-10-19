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

const getUserId = (id) => {
  try {
    return userRepository.findbyId(id);
  } catch (error) {
    throw error;
  }
};

const updateUser = (req, id) => {
  try {
    const { email, role, gender, password } = req.body;
    const userPayload = {
      email,
      role,
      password,
      gender,
    };

    return userRepository.update(userPayload, id);
  } catch (error) {
    throw error;
  }
};

const deleteUser = (id) => {
  try {
    return userRepository.destroy(id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getUsers, getUserId, createUser, updateUser, deleteUser };
