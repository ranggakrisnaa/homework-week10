const { userService } = require("../../services");

const createUser = async (req, res, next) => {
  try {
    if (!req.body.email || !req.body.password || !req.body.gender)
      throw { name: "errNotFound" };
    await userService.createUser(req.body);

    res
      .statu(201)
      .json({ success: "true", message: "User Created Successfully" });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

const getUserId = async (req, res, next) => {
  try {
    const user = await userService.getUserId(req.params);

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = await userService.getUserId(req.params);
    if (!user) throw { name: "errNotFound" };
    await userService.updateUser(req, user);

    res.status(200).json({ success: true, message: "success" });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await userService.getUserId(req.params);
    if (!user) throw { name: "errNotFound" };
    await userService.deleteUser(user);

    res.status(200).json({ success: true, message: "succes" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, getUserId, createUser, updateUser, deleteUser };
